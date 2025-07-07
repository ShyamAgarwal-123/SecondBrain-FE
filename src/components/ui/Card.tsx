import ShareIcon from "../../icons/ShareIcon";
import ContentView from "./ContentView";

export interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="bg-white rounded-md border-2 border-gray-100 max-w-72 p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-md">
          <ShareIcon size="md" />
          <span>{title}</span>
        </div>
        <div className="flex gap-2 items-center">
          <ShareIcon size="md" />
          <ShareIcon size="md" />
        </div>
      </div>
      <ContentView link={link} type={type} />
      <div></div>
      <div></div>
    </div>
  );
};

export default Card;
