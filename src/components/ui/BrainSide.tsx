import useAllContent from "../../hooks/useAllContent";
import useContentForm from "../../hooks/useContentForm";
import useUser from "../../hooks/useUser";
import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";
import Button from "./Button";
import Card from "./Card";
import { SkeletonLoader } from "./skeleton";
import { shareBrainService } from "../../services";
import type { ResponseType } from "../../types";
import useUserAuth from "../../hooks/useUserAuth";

const BrainSide = () => {
  const { setContentForm } = useContentForm();
  const { allContent } = useAllContent();
  const { user, setUser } = useUser();
  const { fetchUser } = useUserAuth();

  const onShare = async (
    e: React.MouseEvent<HTMLButtonElement>,
    share: boolean
  ) => {
    if (!user.authenticated) return;
    try {
      const data: ResponseType = await shareBrainService(share);
      if (data.success) {
        if (share) {
          setUser((prev) => ({ ...prev, hash: data.data }));
          navigator.clipboard.writeText(data.data);
        } else {
          setUser((prev) => ({ ...prev, hash: "" }));
        }
      }
      console.log(data);
    } catch (data: any) {
      if (data?.success) {
        onShare(e, true);
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        await fetchUser();
        onShare(e, true);
      }
      console.log(data);
    }
  };

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
            onClick={(e) => onShare(e, true)}
            disabled={!user.authenticated}
          >
            Share Brain
          </Button>
          {user.hash && (
            <Button
              variant="secondary"
              size="md"
              startIcon={<ShareIcon />}
              className="cursor-pointer space-x-2"
              onClick={(e) => onShare(e, false)}
              disabled={!user.authenticated && !user.hash}
            >
              UnShare Brain
            </Button>
          )}
          <Button
            disabled={!user.authenticated}
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
                  tags={content.tags}
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
