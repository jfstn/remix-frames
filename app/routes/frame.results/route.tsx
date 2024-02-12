import {
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/cloudflare";
import { ContentWrapper } from "~/components/ContentWrapper";
import { KV_KEYS } from "~/config";
import { buildFrameImageUrl } from "./utils";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { MY_KV: myKv } = context.env;

  const [catoVotes, dogoVotes] = await Promise.all([
    myKv.get(KV_KEYS.cato),
    myKv.get(KV_KEYS.dogo),
  ]);

  return json({ catoVotes: catoVotes || "0", dogoVotes: dogoVotes || "0" });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const imageUrl = buildFrameImageUrl(data);

  return [
    { title: "Cato 🙀 or Dogo 🐶?" },
    {
      property: "og:title",
      content: "Cato or Dogo?",
    },
    {
      name: "og:image",
      content: imageUrl,
    },
    { name: "fc:frame:image:aspect_ratio", content: "1:1" },
    { name: "fc:frame", content: "vNext" },
    { name: "fc:frame:button:1", content: "🐶 Refreshoo 😼" },
    {
      name: "fc:frame:image",
      content: imageUrl,
    },
    {
      name: "fc:frame:post_url",
      content: "https://remix-frames.pages.dev/frame/results",
    },
  ];
};

export default function FrameResult() {
  const data = useLoaderData<typeof loader>();

  const imageUrl = buildFrameImageUrl(data);

  return (
    <ContentWrapper>
      <h1>
        frame <span className="bg-orange-400">results</span> page
      </h1>
      <div className="w-[382px] h-[382px]">
        <img src={imageUrl} alt="" />
      </div>
      <div className="flex">
        <a className="ml-auto hover:underline" href="/">
          &lt; back
        </a>
      </div>
    </ContentWrapper>
  );
}

export const action = () => redirect("/frame/results");
