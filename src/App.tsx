import { useEffect } from "react";
import CreateContentModal from "./components/modal/CreateContentModal";
import BrainSide from "./components/ui/BrainSide";
import SideBar from "./components/ui/SideBar";
import Tabs from "./components/ui/Tabs";
import useUserAuth from "./hooks/useUserAuth";
import useAllContent from "./hooks/useAllContent";

function App() {
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
}

export default App;
