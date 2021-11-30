import Head from "next/head";

export default function Newsletter() {
  return (
    <div>
      <Head>
        <title>Kollektiv Kaorle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <div>
            <form
              action="https://gmail.us5.list-manage.com/subscribe/post?u=c2f967367f4fe89919e099eb0&amp;id=34cf05b1c8"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div>
                <label for="mce-EMAIL">Subscribe</label>
                <input
                  type="email"
                  // value=""
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div
                  css="position: absolute; left: -5000px;"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_c2f967367f4fe89919e099eb0_34cf05b1c8"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
