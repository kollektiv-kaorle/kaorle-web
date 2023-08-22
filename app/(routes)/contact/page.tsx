import { ExternalLink } from "@/app/_components/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-5">
      <h1 className="font-bold italic text-2xl mb-8">Kontakt & Impressum</h1>
      <div className="flex flex-col gap-3">
        <div>
          <div>Kollektiv Kaorle</div>
          <div>Raum für soziokulturelle Produktion und Begegnung</div>
          <div>ZVR-Zahl: 1055699861</div>
          <ExternalLink href="mailto:post@kollektiv-kaorle.at">
            → post@kollektiv-kaorle.at
          </ExternalLink>
        </div>
        <div>
          Ottakringer Str. 201
          <br />
          1160 Wien
          <br />
          <ExternalLink href="https://goo.gl/maps/arid39WV6yVhccPm9">
            → Anfahrt
          </ExternalLink>
          <br />
        </div>
      </div>
    </main>
  );
}
