import {
  ActionFunctionArgs,
  MetaFunction,
  redirect,
} from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    {
      name: "og:image",
      content:
        "https://placehold.co/400/orange/white?text=Cato\nor\nDogo?&font=roboto",
    },
    { name: "fc:frame", content: "vNext" },
    { name: "fc:frame:button:1", content: "Cato " },
    { name: "fc:frame:button:2", content: "Dogo" },
    {
      name: "fc:frame:image",
      content:
        "https://placehold.co/400/orange/white?text=Cato\nor\nDogo?&font=roboto",
    },
  ];
};

// export async function action({ request, context }: ActionFunctionArgs) {
//   const { MY_KV: myKv } = context.env;

//   if (request.method === "POST") {
//     const formData = await request.formData();
//     const value = formData.get("value") as string;
//     await myKv.put(key, value);
//     return null;
//   }

//   if (request.method === "DELETE") {
//     await myKv.delete(key);
//     return null;
//   }

//   throw new Error(`Method not supported: "${request.method}"`);
// }

export const action = ({ request }: ActionFunctionArgs) => {
  // validate

  console.log(request);

  return redirect("/frame/results");
};

export default function Frame() {
  return (
    <main>
      <h1>frame</h1>
    </main>
  );
}
