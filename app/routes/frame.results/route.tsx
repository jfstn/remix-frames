import {
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/cloudflare";
import { KV_KEYS } from "~/config";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { MY_KV: myKv } = context.env;

  const [catoVotes, dogoVotes] = await Promise.all([
    myKv.get(KV_KEYS.cato),
    myKv.get(KV_KEYS.dogo),
  ]);

  return json({ catoVotes: catoVotes || "0", dogoVotes: dogoVotes || "0" });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const isOrangeBackground = Number(data?.catoVotes) > Number(data?.dogoVotes);

  return [
    { title: "Cato 🙀 or Dogo 🐶?" },
    {
      property: "og:title",
      content: "Cato or Dogo?",
    },
    {
      name: "og:image",
      content: `https://placehold.co/400/${
        isOrangeBackground ? "orange" : "grey"
      }/white?text=Cato:+33%0ADogo:+43&font=roboto`,
    },
    { name: "fc:frame", content: "vNext" },
    { name: "fc:frame:button:1", content: "I want vote again! 😾🐶" },
    {
      name: "fc:frame:image",
      content: `https://placehold.co/400/${
        isOrangeBackground ? "orange" : "grey"
      }/white?text=Cato:+${data?.catoVotes}%0ADogo:+${
        data?.dogoVotes
      }&font=roboto`,
    },
  ];
};

export default function FrameResult() {
  return (
    <main>
      <h1>results:</h1>
    </main>
  );
}

export const action = () => redirect("/frame");
