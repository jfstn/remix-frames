import {
  ActionFunctionArgs,
  MetaFunction,
  redirect,
} from "@remix-run/cloudflare";
import { KV_KEYS } from "~/config";
import { FrameSignaturePacket } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Cato 🙀 or Dogo 🐶?" },
    {
      property: "og:title",
      content: "Cato or Dogo?",
    },
    {
      name: "og:image",
      content:
        "https://placehold.co/400/orange/white?text=Cato%0Aor%0ADogo?&font=roboto",
    },
    { name: "fc:frame", content: "vNext" },
    { name: "fc:frame:button:1", content: "Cato 😻" },
    { name: "fc:frame:button:2", content: "Dogo 🐶" },
    {
      name: "fc:frame:image",
      content:
        "https://placehold.co/400/orange/white?text=Cato%0Aor%0ADogo?&font=roboto",
    },
    {
      name: "fc:frame:post_url",
      content: "https://remix-frames.pages.dev/frame",
    },
  ];
};

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const { MY_KV: myKv } = context.env;

  const data: FrameSignaturePacket = await request.json();

  // Please check https://developers.cloudflare.com/kv/reference/how-kv-works/#consistency

  if (data.untrustedData.buttonIndex === 1) {
    const catoVotes = await myKv.get(KV_KEYS.cato);
    await myKv.put(KV_KEYS.cato, String(catoVotes ? Number(catoVotes) + 1 : 1));
  }

  if (data.untrustedData.buttonIndex === 2) {
    const dogoVotes = await myKv.get(KV_KEYS.dogo);
    await myKv.put(KV_KEYS.dogo, String(dogoVotes ? Number(dogoVotes) + 1 : 1));
  }

  return redirect("/frame/results");
};

export default function Frame() {
  return (
    <main>
      <h1>frame</h1>
    </main>
  );
}
