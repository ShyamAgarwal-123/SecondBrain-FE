import useAllSharedContent from "../../hooks/useAllSharedContent";
import Card from "./Card";
import { SkeletonLoader } from "./skeleton";

const ShareBrainSide = () => {
  const { sharedContent } = useAllSharedContent();

  return (
    <div
      className={`flex flex-col p-9 bg-[#f9fbfc] min-h-screen flex-1 ml-70 space-y-4`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">All Notes</h1>
        <p>by {sharedContent.username}</p>
      </div>
      <div className="mt-2">
        {sharedContent.loading ? (
          <SkeletonLoader count={4} type="mixed" />
        ) : sharedContent.contents.length > 0 ? (
          <div className="grid grid-cols-2">
            {sharedContent.contents
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

export default ShareBrainSide;
