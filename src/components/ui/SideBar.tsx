import Logo from "../../icons/Logo";

const SideBar = () => {
  return (
    <div className="p-2">
      <div className="flex gap-3 items-center">
        <Logo size="xl" />
        <span className="text-2xl">Second Brain</span>
      </div>
    </div>
  );
};

export default SideBar;
