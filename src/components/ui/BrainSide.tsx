import useAllContent from "../../hooks/useAllContent";
import useContentForm from "../../hooks/useContentForm";
import useUser from "../../hooks/useUser";
import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";
import Button from "./Button";
import Card from "./Card";
import { SkeletonLoader } from "./skeleton";

const BrainSide = () => {
  const { setContentForm } = useContentForm();
  const { allContent } = useAllContent();
  const { user } = useUser();
  return (
    <div
      className={`flex flex-col p-9 bg-[#f9fbfc] min-h-screen flex-1 ml-70 space-y-4`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">All Notes</h1>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="md"
            startIcon={<ShareIcon />}
            className="cursor-pointer space-x-2"
          >
            Share Brain
          </Button>
          <Button
            variant="primary"
            startIcon={<PlusIcon />}
            size="md"
            onClick={() =>
              setContentForm((prev) => {
                return { ...prev, open: true };
              })
            }
            className="cursor-pointer"
          >
            Add Content
          </Button>
        </div>
      </div>
      <div className="mt-2">
        {user.authenticated && allContent.loading ? (
          <SkeletonLoader count={4} type="mixed" />
        ) : allContent.contents.length > 0 ? (
          <div className="grid grid-cols-2">
            {allContent.contents
              .filter(
                (content) =>
                  content.type === "tweet" || content.type === "youtube"
              )
              .map((content, index) => (
                <Card
                  key={index}
                  link={content.link}
                  type={content.type as "tweet" | "youtube"}
                  title={content.title}
                  _id={content._id}
                />
              ))}
          </div>
        ) : (
          <>
            <p>No Content</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BrainSide;
