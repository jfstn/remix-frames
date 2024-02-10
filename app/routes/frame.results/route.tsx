import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/cloudflare";

export const loader = ({ context }: LoaderFunctionArgs) => {
  const { MY_KV: myKv } = context.env;

  //   const value = await MY_KV.get(key);
  //   return json({ value });

  console.log(myKv);

  return json({ cato: "", dogo: "" });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  console.log(data);

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
    { name: "fc:frame:button:1", content: "Reload" },
    {
      name: "fc:frame:image",
      content:
        "https://images.unsplash.com/photo-1707418439581-6a10bb0677cc?q=80&w=3089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
};

export default function Frame() {
  return (
    <main>
      <h1>results:</h1>
    </main>
  );
}
