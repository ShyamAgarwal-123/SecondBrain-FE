import DeleteIcon from "../../icons/DeleteIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import LinkIcon from "../../icons/LinkIcon";
import ShareIcon from "../../icons/ShareIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import type { ContentType } from "../../types";
import ContentView from "./ContentView";

export type CardProps = Pick<ContentType, "link" | "title" | "type">;

function IconRender(type: string) {
  switch (type) {
    case "tweet":
      return <TwitterIcon />;
    case "youtube":
      return <YoutubeIcon />;
    case "link":
      return <LinkIcon />;
    case "document":
      return <DocumentIcon />;
    default:
      return <DocumentIcon />;
  }
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="bg-white rounded-md border-2 border-gray-100 max-w-72 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-md">
          {IconRender(type)}
          <span>{title}</span>
        </div>
        <div className="flex space-x-4 items-center text-gray-400">
          <ShareIcon size="md" />
          <DeleteIcon />
        </div>
      </div>
      <ContentView link={link} type={type} />
      <div></div>
      <div></div>
    </div>
  );
};

export default Card;
