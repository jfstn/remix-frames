import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Very cool app | Remix" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
    { name: "fc:frame", content: "vNext" },
    { name: "fc:frame:button:1", content: "Green" },
    { name: "fc:frame:button:2", content: "Purple" },
    { name: "fc:frame:button:3", content: "Red" },
    { name: "fc:frame:button:4", content: "Blue" },
    {
      name: "fc:frame:image",
      content:
        "https://images.unsplash.com/photo-1694505971189-b78ded110152?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
};

export default function Frame() {
  return <div>TEST</div>;
}
