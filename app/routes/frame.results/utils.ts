import { SerializeFrom } from "@remix-run/cloudflare";
import { loader } from "./route";

const ERROR_IMAGE_URL =
  "https://placehold.co/400/red/white?text=Something+went+wrong!&font=roboto";

export const buildFrameImageUrl = (data?: SerializeFrom<typeof loader>) => {
  if (!data) return ERROR_IMAGE_URL;

  const isOrangeBackground = Number(data?.catoVotes) > Number(data?.dogoVotes);

  const imageUrl = `https://placehold.co/400/${
    isOrangeBackground ? "orange" : "grey"
  }/white?text=Cato:+${data?.catoVotes}%0A%0ADogo:+${
    data?.dogoVotes
  }&font=roboto&${Date.now()}`;

  return imageUrl;
};
