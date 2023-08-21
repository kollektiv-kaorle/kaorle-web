import { ExternalLink, InternalLink } from "@/app/_components/link";
import nav from "@/app/_config/nav";
import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl flex flex-col gap-8 px-5">
      <section className="text-justify max-w-lg mx-auto w-full">
        <h2 className="font-bold italic text-2xl mb-3 -ml-1">
          Was ist Kollektiv Kaorle?
        </h2>
        <p>
          Wir sind ein gemeinnütziger Verein, der einen gemeinschaftlich
          verwalteten und genutzten Raum für Austausch und dezentrale Kultur der
          Nachbarschaft und allen* Menschen zur Verfügung stellt. Wir sind
          multidisziplinär tätig und beschäftigen uns mit kultureller und
          handwerklicher Produktion sowie der Aktivierung des öffentlichen
          Raums.
        </p>
      </section>
      <section className="text-justify max-w-lg mx-auto w-full">
        <h2 className="font-bold italic text-2xl mb-3">
          Ein Lido für Ottakring
        </h2>
        <p>
          Kollektiv Kaorle ist nach Ottakring gezogen: Ein neuer Raum, eine neue
          Baustelle und viel mehr Platz für Kultur, Handwerk und
          Grätzlaktivitäten in der Ottakringer Straße 201. Der Innenhof ist der
          Lido, ein öffentlicher Raum für das Grätzl, der regelmäßig mit
          Programm und Aktivitäten bespielt wird. Wir möchten die Kunst- und
          Kulturszene in Ottakring lokal beleben, Gemeinschaft fördern und im
          Alltag einen Diskurs darüber eröffnen, wie wir miteinander leben
          wollen.
        </p>
      </section>
      <section className="max-w-lg mx-auto w-full border border-[#ff1922] py-2.5 px-3">
        <h2 className="font-bold italic text-2xl mb-1">
          Du möchtest mitmachen?
        </h2>
        <p>
          Schreib uns an{" "}
          <ExternalLink href="mailto:post@kollektiv-kaorle.at">
            post@kollektiv-kaorle.at
          </ExternalLink>{" "}
          oder{" "}
          <InternalLink href={nav.contact.href} className="inline-block">
            komm vorbei!
          </InternalLink>
        </p>
      </section>
      <div className="mt-7">
        <Image
          src="/images/plan.png"
          alt="Plan"
          width={1200}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
