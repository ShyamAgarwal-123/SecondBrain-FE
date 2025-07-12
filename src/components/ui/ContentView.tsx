import type { CardProps } from "./Card";
import TwitterView from "./TwitterView";
import YoutubeView from "./YoutubeView";

const ContentView = ({ type, link }: Omit<CardProps, "title">) => {
  return (
    <div>
      {type === "tweet" && <TwitterView link={link} />}
      {type === "youtube" && <YoutubeView link={link} />}
    </div>
  );
};

export default ContentView;
