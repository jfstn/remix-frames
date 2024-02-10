import { MetaFunction } from "@remix-run/cloudflare";
import { ContentWrapper } from "~/components/ContentWrapper";

export const meta: MetaFunction = () => [
  { title: "Cato 🙀 or Dogo 🐶?" },
  {
    property: "og:title",
    content: "Cato or Dogo?",
  },
];

export default function Index() {
  return (
    <ContentWrapper>
      <div className="text-center text-5xl">
        😼 <span className="text-xl">vs</span> 🐶
      </div>
      <h1 className="mt-4">
        <span className="bg-orange-400">@joaofaustino&#39;s</span> remix{" "}
        <a href="/frame" className="hover:underline text-orange-400">
          frame
        </a>{" "}
        example
      </h1>
      <ul className="flex-col">
        <li className="text-center mt-4">
          <a
            href="https://warpcast.com/joaofaustino"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            <img
              alt=""
              src="https://icodrops.com/wp-content/uploads/2022/07/QoG0ZVgH_400x400.jpg"
              className="size-5 inline mr-2 rounded-lg"
            />
            warpcast profile
          </a>
        </li>
        <li className="text-center mt-4">
          <a
            href="https://github.com/jfstn/remix-frames"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            <img
              alt=""
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              className="size-5 inline mr-2 rounded-lg"
            />
            repository
          </a>
        </li>
        <li className="text-center mt-4">
          <a href="/frame/results">
            📥<span className="hover:underline ml-2">results</span>
          </a>
        </li>
      </ul>
    </ContentWrapper>
  );
}
