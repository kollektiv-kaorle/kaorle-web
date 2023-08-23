import Image from "next/image";
import { ExternalLink } from "@/app/_components/link";
import { formatDe, parseISO } from "@/app/_utils/datetime";
import md from "@/app/_utils/markdown-it";
import config from "@/app/_config";
import { EventExportPayload } from "../_types";
import getHours from "date-fns/getHours";
import { differenceInDays, isSameMonth, subDays } from "date-fns";
// import { Metadata, ResolvingMetadata } from "next";

// export async function generateMetadata(
//   {
//     params,
//   }: {
//     params: { slug: string };
//   },
//   parent?: ResolvingMetadata
//   // ): Promise<Metadata> {
// ) {
//   const e = await getEvent(params.slug);

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent)?.openGraph?.images || [];

//   if (!e) {
//     return {
//       title: "Kollektiv Kaorle",
//       openGraph: {
//         images: previousImages,
//       },
//     } as Metadata;
//   }

//   let doors = e.schedule?.find((s) => s.name === "Einlass")?.date;
//   doors = doors ? parseISO(doors) : undefined;
//   let start = parseISO(doors ?? e.start);

//   const imageSrc =
//     e.shopEvent?.image?.sizes["640"] ?? e.images?.[0]?.sizes["640"];
//   const location =
//     e.locations?.map((l) => l.name).join(", ") ?? e.shopEvent?.location;

//   return {
//     title: `${e.displayNames.title} · ${
//       location ? `${formatDe(start, "P")} @ ${location}` : ""
//     }`,
//     openGraph: {
//       images: imageSrc ? [imageSrc, ...previousImages] : previousImages,
//     },
//   } as Metadata;
// }

async function getEvent(slug: string): Promise<EventExportPayload | undefined> {
  const res = await fetch(`${config.copilotBaseUrl}/event/${slug}`, {
    headers: {
      Authorization: `Bearer ${config.copilotApiToken}`,
    },
  });
  return res.json();
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const e = await getEvent(params.slug);

  return (
    // colocate responsive styles! see Item's grid
    <main className="mx-auto xl:max-w-3xl max-w-[350px] px-3">
      {/* <h1 className="font-bold italic text-2xl mb-8">← Zurück</h1> */}
      {e ? (
        <Item event={e} />
      ) : (
        <div>Veranstaltung konnte nicht gefunden werden</div>
      )}
    </main>
  );
};

export default Page;

const Item: React.FC<{ event: EventExportPayload }> = (props) => {
  const e = props.event;

  let doors = e.schedule?.find((s) => s.name === "Einlass")?.date;
  doors = doors ? parseISO(doors) : undefined;
  let start = parseISO(doors ?? e.start);
  let end = e.schedule?.find((s) => s.name === "Ende")?.date;
  end = end ? parseISO(end) : undefined;

  let formattedDate = formatDe(start, "E Pp");
  if (end) {
    const adjustedEndDate = getHours(end) < 7 ? subDays(end, 1) : end;
    ("P");
    const diff = differenceInDays(adjustedEndDate, start);
    if (diff > 0) {
      if (isSameMonth(start, adjustedEndDate)) {
        formattedDate = `${formatDe(start, "dd.")} - ${formatDe(
          adjustedEndDate,
          "dd.MM.yyyy"
        )}`;
      } else {
        formattedDate = `${formatDe(start, "E P")} - ${formatDe(
          adjustedEndDate,
          "E P"
        )}`;
      }
    } else {
      formattedDate = `${formatDe(start, "E Pp")} - ${formatDe(end, "p")}`;
    }
  }

  const title = e.shopEvent?.name ?? e.name;
  const subTitle = e.shopEvent?.subTitle ?? e.subTitle;
  const location =
    e.locations?.map((l) => l.name).join(", ") ?? e.shopEvent?.location;
  const shopUrl = e.shopEvent?.url;
  const shopLink = shopUrl
    ? {
        label: "Tickets",
        href: shopUrl,
      }
    : undefined;
  const webUrl = e.links?.find((l) => l.type === "Web extern")?.value;
  const webLink = webUrl
    ? {
        label: "Weitere Infos",
        href: webUrl,
      }
    : undefined;
  const imageSrc =
    e.shopEvent?.image?.sizes["640"] ?? e.images?.[0]?.sizes["640"];
  const imageAlt = e.shopEvent?.image?.name ?? "";

  const description =
    (e.eventInformations?.find((e) => e.name === "Info kurz")?.value as
      | string
      | undefined) ??
    e.shopEvent?.description ??
    "";

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[350px_1fr] xl:gap-8 gap-5">
      <div>
        {imageSrc && (
          <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
        )}
      </div>
      <div>
        <div className="mt-1">
          {formattedDate} @ {location}
        </div>
        <h2 className="underline underline-offset-4 font-bold mt-1">{title}</h2>
        {subTitle && <div>{subTitle}</div>}
        {shopLink && (
          <div className="mt-4">
            <ExternalLink
              href={shopLink.href}
              className="no-underline hover:text-white border border-[#ff1922] hover:bg-[#ff1922] px-2 py-0.5 hover:no-underline"
            >
              → {shopLink.label}
            </ExternalLink>
          </div>
        )}
        {webLink && (
          <div className="mt-4">
            <ExternalLink href={webLink.href}>→ {webLink.label}</ExternalLink>
          </div>
        )}

        <div
          className="prose-sm mt-5 text-justify prose-a:underline prose-a:underline-offset-2 prose-a:decoration-red-200 hover:prose-a:decoration-inherit prose-hr:border-red-300 prose-hr:my-4"
          dangerouslySetInnerHTML={{ __html: md.render(description) }}
        />
      </div>
    </div>
  );
};
