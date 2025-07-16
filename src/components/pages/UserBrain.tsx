import { useEffect } from "react";
import useAllContent from "../../hooks/useAllContent";
import useUserAuth from "../../hooks/useUserAuth";
import Tabs from "../ui/Tabs";
import CreateContentModal from "../modal/CreateContentModal";
import SideBar from "../ui/SideBar";
import BrainSide from "../ui/BrainSide";

const UserBrain = () => {
  const { fetchUser } = useUserAuth();
  const { fetchAllContent } = useAllContent();

  useEffect(() => {
    fetchUser();
    fetchAllContent();
  }, []);

  return (
    <div className="h-screen">
      <Tabs />
      <CreateContentModal />
      <div className="flex">
        <SideBar />
        <BrainSide />
      </div>
    </div>
  );
};

export default UserBrain;
