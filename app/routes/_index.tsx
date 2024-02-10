import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => [
  { title: "Cato 🙀 or Dogo 🐶?" },
  {
    property: "og:title",
    content: "Cato or Dogo?",
  },
];

export default function Index() {
  return (
    <main className="flex size-full">
      <div className="m-auto">
        <h1 className="">
          <a
            href="https://warpcast.com/joaofaustino"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-400"
          >
            @joaofaustino&#39;s
          </a>{" "}
          remix frame example
        </h1>
      </div>
    </main>
  );
}
