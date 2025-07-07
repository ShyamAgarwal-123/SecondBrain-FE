import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";
import Button from "./Button";
import Notes from "./Notes";

const BrainSide = () => {
  return (
    <div
      className="flex flex-col p-3 bg-[#f9fbfc

]"
    >
      <div className="flex justify-between">
        <h1>All Notes</h1>
        <div className="flex gap-2">
          <Button variant="secondary" size="md" startIcon={<ShareIcon />}>
            Share Brain
          </Button>
          <Button variant="primary" startIcon={<PlusIcon />} size="md">
            Add Content
          </Button>
        </div>
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default BrainSide;
