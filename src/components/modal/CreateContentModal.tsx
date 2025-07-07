import CrossIcon from "../../icons/CrossIcon";
import Button from "../ui/Button";
import Input from "../ui/Input";

const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-500 opacity-60 flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 rounded p-4">
              <div className="flex justify-end">
                <CrossIcon
                  size="md"
                  onClick={onClose}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <Input placeholder="Title" />
                <Input placeholder="Link" />
              </div>
              <div className="flex justify-center">
                <Button variant="primary" size="md">
                  Submit
                </Button>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
