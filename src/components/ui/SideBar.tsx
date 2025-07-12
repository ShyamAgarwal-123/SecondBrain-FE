import Logo from "../../icons/Logo";
import SideBarItem from "./SideBarItem";
import TwitterIcon from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import LinkIcon from "../../icons/LinkIcon";

const SideBar = () => {
  return (
    <div className={`p-2 w-[20%] space-y-3 fixed top-0 left-0`}>
      <div className="flex gap-3 items-center mt-2">
        <Logo size="xl" />
        <span className="text-3xl">Second Brain</span>
      </div>
      <div className="p-4 space-y-4 py-7">
        <SideBarItem Icon={<TwitterIcon />}>Tweets</SideBarItem>
        <SideBarItem Icon={<YoutubeIcon />}>Videos</SideBarItem>
        <SideBarItem Icon={<DocumentIcon />}>Documents</SideBarItem>
        <SideBarItem Icon={<LinkIcon />}>Links</SideBarItem>
      </div>
    </div>
  );
};

export default SideBar;
