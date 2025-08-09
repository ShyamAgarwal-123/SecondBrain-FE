import useAllContent from "../../hooks/useAllContent";
import useUserAuth from "../../hooks/useUserAuth";
import DeleteIcon from "../../icons/DeleteIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import LinkIcon from "../../icons/LinkIcon";
import ShareIcon from "../../icons/ShareIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import { deleteContentService } from "../../services";
import type { ContentType, ResponseType } from "../../types";
import ContentView from "./ContentView";

export type CardProps = Pick<
  ContentType,
  "link" | "title" | "type" | "_id" | "tags"
>;

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

const Card = ({ title, link, type, _id, tags }: CardProps) => {
  const { setAllContent } = useAllContent();
  const { fetchUser } = useUserAuth();
  async function onDelete() {
    try {
      const data: ResponseType = await deleteContentService(_id);
      if (data.success) {
        setAllContent((prev) => {
          const contents = prev.contents;
          let updatedContents = contents.filter(
            (content) => content._id !== _id
          );
          console.log(updatedContents);
          return { ...prev, contents: updatedContents };
        });
      }
    } catch (data: any) {
      if (data?.success) {
        onDelete();
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        fetchUser();
      }
    }
  }
  return (
    <div className="bg-white rounded-md border-2 border-gray-100 max-w-72 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-md">
          {IconRender(type)}
          <span>{title}</span>
        </div>
        <div className="flex space-x-4 items-center text-gray-400">
          <ShareIcon size="md" />
          <DeleteIcon onClick={onDelete} className="cursor-pointer" />
        </div>
      </div>
      <ContentView link={link} type={type} />
      {tags.length && (
        <div className="flex flex-wrap">
          {tags.map((tag) => {
            return (
              <span
                className="bg-purple-400 border-2 text-black rounded-xl p-2"
                key={tag._id}
              >
                # {tag.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
