import { useParams } from "react-router-dom";
import SideBar from "../ui/SideBar";
import { useEffect } from "react";
import useAllSharedContent from "../../hooks/useAllSharedContent";
import ShareBrainSide from "../ui/ShareBrainSide";

const ShareBrain = () => {
  const { shareLink } = useParams();
  const { fetchAllSharedContent } = useAllSharedContent();

  useEffect(() => {
    fetchAllSharedContent(shareLink);
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <ShareBrainSide />
    </div>
  );
};

export default ShareBrain;
