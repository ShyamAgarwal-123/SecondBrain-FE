import useContentForm from "../../hooks/useContentForm";
import CrossIcon from "../../icons/CrossIcon";
import { defaultContentForm } from "../../recoil/atoms/contentFormAtom";
import Button from "../ui/Button";
import Input from "../ui/Input";

const CreateContentModal = () => {
  const {
    contentForm,
    onInputChange,
    onSelectChange,
    onSubmit,
    setContentForm,
  } = useContentForm();
  return (
    <div>
      {contentForm.open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-10">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-slate-500 opacity-60 top-0 left-0"></div>
          {/* Modal Content */}
          <div className="relative flex flex-col justify-center">
            <span className="bg-white rounded p-4">
              <div className="flex justify-end">
                <CrossIcon
                  size="md"
                  onClick={() => setContentForm(defaultContentForm)}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <Input
                  placeholder="Title"
                  value={contentForm.title}
                  onChange={onInputChange}
                />
                <Input
                  placeholder="Link"
                  value={contentForm.link}
                  onChange={onInputChange}
                />
                <select onChange={onSelectChange} value={contentForm.type}>
                  <option value="tweet">Tweet</option>
                  <option value="youtube">Youtube</option>
                  <option value="link">Link</option>
                  <option value="document">Document</option>
                </select>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onSubmit}
                  className="cursor-pointer"
                >
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
