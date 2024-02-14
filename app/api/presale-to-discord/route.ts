import _config from "@/app/_config";
import { NextRequest, NextResponse } from "next/server";
import { sumBy } from "lodash";
import { EventExportPayload } from "@/app/(routes)/events/_types";

const copilotApiToken = _config.copilotApiToken;
const copilotApiUrl = `${_config.copilotBaseUrl}/events`;
const discordWebhookUrl =
  "https://discord.com/api/webhooks/1203398727486668830/t6O_CWnOignLGQU60FIyFLTFXTNWqs709mQynUOgJexhtue41zTShc7SI-aJeIF-_vBH";

export async function POST(request: NextRequest) {
  const copilotResponse = await fetch(copilotApiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${copilotApiToken}`,
    },
  });
  if (!copilotResponse.ok) {
    console.error(`[copilot] HTTP error! Status: ${copilotResponse.status}`);
    return NextResponse.json(
      { statusText: copilotResponse.statusText },
      { status: copilotResponse.status }
    );
  }

  const copilotResponseJson = await copilotResponse.json();

  // console.log("response", copilotResponseJson);

  const message = copilotResponseJson.data
    .filter((e: EventExportPayload) => e.ticketing?.length)
    .map((e: EventExportPayload) => {
      const contingents = e.ticketing;

      return `**${e.name}**
\`\`\`
${"Gesamt".padEnd(18)}${String(sumBy(contingents, "soldTickets")).padStart(
        4
      )} / ${String(sumBy(contingents, "contingent")).padStart(4)}
\`\`\``;
    })
    .join("\n");

  // console.log(message);
  // return NextResponse.json({ statusText: "OK", message }, { status: 200 });

  const discordResponse = await fetch(discordWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
  if (!discordResponse.ok) {
    console.log(`[discord] HTTP error! Status: ${discordResponse.status}`);
    return NextResponse.json(
      { statusText: discordResponse.statusText },
      { status: discordResponse.status }
    );
  }
  const discordResponseJson = await discordResponse.json();
  console.log(discordResponseJson);
  return NextResponse.json({}, { status: 200 });
}
