import CreateSignUpModal from "./components/modal/CreateSignUpModal";
import BrainSide from "./components/ui/BrainSide";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import CreateContentModal from "./components/modal/CreateContentModal";
import SideBar from "./components/ui/SideBar";
import PlusIcon from "./icons/PlusIcon";

function App() {
  return (
    <div className=" h-screen">
      {/* <CreateContentModal open={true} /> */}
      <CreateSignUpModal />
      <BrainSide />
    </div>
  );
}

export default App;
