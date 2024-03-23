import Image from "next/image";
import { EventExportPayload } from "./_types";
import { ExternalLink } from "@/app/_components/link";
import { formatDe, parseISO } from "@/app/_utils/datetime";
import Link from "next/link";
import config from "@/app/_config";
import {
  differenceInDays,
  getHours,
  isSameMonth,
  isSameYear,
  subDays,
} from "date-fns";
import { trackEvent } from "fathom-client";

async function getEvents(): Promise<{
  data: EventExportPayload[];
  total: number;
  _links: {
    prev?: string;
    current: string;
    next?: string;
  };
}> {
  const res = await fetch(
    `${config.copilotBaseUrl}/events?filter.promotionType=kaorle-web&pagination.skip=0&pagination.take=100&filter.date.startDayOffset=0&filter.date.kind=relativeRange`,
    {
      headers: {
        Authorization: `Bearer ${config.copilotApiToken}`,
      },
    }
  );
  return res.json();
}

const Page = async () => {
  const events = await getEvents();

  return (
    <main className="mx-auto md:max-w-2xl max-w-[300px]">
      <h1 className="font-bold italic text-2xl mb-8">Veranstaltungen</h1>
      <div className="flex flex-col gap-9 md:gap-7">
        {events.data.length ? (
          events.data.map((e) => <Item event={e} key={e.id} />)
        ) : (
          <div>Es gibt momentan keine zukünftigen Veranstaltungen.</div>
        )}
      </div>
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
      } else if (isSameYear(start, adjustedEndDate)) {
        formattedDate = `${formatDe(start, "dd.MM.")} - ${formatDe(
          adjustedEndDate,
          "dd.MM.yyyy"
        )}`;
      } else {
        formattedDate = `${formatDe(start, "E P")} - ${formatDe(
          adjustedEndDate,
          "E P"
        )}`;
      }
    }
  }

  const title = e.shopEvent?.name ?? e.name;
  const subTitle = e.shopEvent?.subTitle ?? e.subTitle;
  const location =
    e.locations?.map((l) => l.name).join(" & ") ?? e.shopEvent?.location;
  const shopUrl = e.shopEvent?.url;
  const shopLink = shopUrl
    ? {
        label: "Tickets",
        href: shopUrl,
      }
    : undefined;
  const imageSrc =
    e.shopEvent?.image?.sizes["640"] ?? e.images?.[0]?.sizes["640"];
  const imageAlt = e.shopEvent?.image?.name ?? "";
  const detailHref = `/events/${e.slug}`;

  return (
    <div className="flex flex-col gap-7">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-5 gap-3">
        <div className="relative">
          <Link href={detailHref} tabIndex={-1}>
            {imageSrc && (
              <Image
                src={imageSrc.replace("quality=50", "quality=100")}
                alt={imageAlt}
                width={300}
                height={300}
              />
            )}
          </Link>
        </div>
        <div>
          <div className="mt-1 flex gap-x-1 flex-wrap">
            <div>{formattedDate}</div>
            <div>@ {location}</div>
          </div>
          <h2 className="underline decoration-red-300 decoration-1 hover:decoration-inherit underline-offset-4 font-bold mt-1">
            <Link href={detailHref}>{title}</Link>
          </h2>
          {/* <pre>{JSON.stringify(e.shopEvent, null, 2)}</pre> */}
          {subTitle && <div>{subTitle}</div>}
          {shopLink && (
            <div className="mt-4">
              <ExternalLink
                href={shopLink.href}
                className="text-sm no-underline hover:text-white border border-[#ff1922] hover:bg-[#ff1922] px-2 py-0.5 hover:no-underline"
                onClick={() =>
                  trackEvent("ticket link click", {
                    _value: title as any,
                  })
                }
              >
                → {shopLink.label}
              </ExternalLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
