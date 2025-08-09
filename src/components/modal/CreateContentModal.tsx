import { useEffect, useState } from "react";
import useContentForm from "../../hooks/useContentForm";
import CrossIcon from "../../icons/CrossIcon";
import { defaultContentForm } from "../../recoil/atoms/contentFormAtom";
import Button from "../ui/Button";
import Input from "../ui/Input";

import PlusIcon from "../../icons/PlusIcon";
import useDebounce from "../../hooks/useDebounced";

const CreateContentModal = () => {
  const [tagInput, setTagInput] = useState("");
  const {
    contentForm,
    onInputChange,
    onSubmit,
    setContentForm,
    onSelectChange,
    createTag,
    searchTags,
  } = useContentForm();
  const { debouncedValue } = useDebounce({
    value: tagInput,
    millisecond: 1000,
  });
  useEffect(() => {
    if (debouncedValue) {
      searchTags(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      {contentForm.open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-10">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-slate-500 opacity-60 top-0 left-0"></div>
          {/* Modal Content */}
          <div className="relative flex flex-col justify-center">
            <span className="bg-white rounded p-4">
              <div className="flex justify-end mb-4">
                <CrossIcon
                  onClick={() => {
                    setContentForm(defaultContentForm);
                    setTagInput("");
                  }}
                  className="cursor-pointer rounded-full bg-gray-200 w-5 h-5"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <Input
                    placeholder="Title"
                    value={contentForm.title}
                    onChange={onInputChange}
                  />
                  <Input
                    textarea={contentForm.type === "document"}
                    placeholder={`${
                      contentForm.type === "document" ? "Notes" : "url"
                    }`}
                    value={contentForm.link}
                    onChange={onInputChange}
                  />
                </div>
                <div className="flex">
                  <Button
                    size="md"
                    variant="secondary"
                    onClick={() => onSelectChange("link")}
                    className={`${
                      contentForm.type === "link"
                        ? "bg-blue-800 text-white"
                        : ""
                    }`}
                  >
                    Link
                  </Button>
                  <Button
                    size="md"
                    variant="secondary"
                    onClick={() => onSelectChange("tweet")}
                    className={`${
                      contentForm.type === "tweet"
                        ? "bg-blue-800 text-white"
                        : ""
                    }`}
                  >
                    Tweet
                  </Button>
                  <Button
                    size="md"
                    variant="secondary"
                    onClick={() => onSelectChange("youtube")}
                    className={`${
                      contentForm.type === "youtube"
                        ? "bg-blue-800 text-white"
                        : ""
                    }`}
                  >
                    Youtube
                  </Button>
                  <Button
                    size="md"
                    variant="secondary"
                    onClick={() => onSelectChange("document")}
                    className={`${
                      contentForm.type === "document"
                        ? "bg-blue-800 text-white"
                        : ""
                    }`}
                  >
                    Document
                  </Button>
                </div>
              </div>

              <div className="flex flex-col">
                <Input
                  placeholder="Add tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                />
                {debouncedValue && (
                  <div className="flex flex-wrap">
                    {contentForm.loadingTags ? (
                      <div className="flex items-center p-2">
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></span>
                        <span>Loading...</span>
                      </div>
                    ) : contentForm.tagOptions.length > 0 ? (
                      contentForm.tagOptions.map((tag) => (
                        <Button
                          key={tag._id}
                          size="sm"
                          variant="secondary"
                          startIcon={<PlusIcon />}
                          onClick={() => {
                            setContentForm((prev) => {
                              const tags = prev.tags.some(
                                (t) => t._id === tag._id
                              )
                                ? prev.tags
                                : [...prev.tags, tag];
                              return {
                                ...prev,
                                tags,
                              };
                            });
                            setTagInput("");
                          }}
                        >
                          {tag.name}
                        </Button>
                      ))
                    ) : (
                      <Button
                        variant="secondary"
                        size="md"
                        startIcon={<PlusIcon />}
                        className="border-1 flex gap-1 bg-purple-200 p-0"
                        onClick={() => {
                          createTag(tagInput);
                          setTagInput("");
                        }}
                      >
                        {tagInput}
                      </Button>
                    )}
                  </div>
                )}
              </div>
              {contentForm.tags && (
                <div className="flex">
                  {contentForm.tags.map((tag) => {
                    return (
                      <Button
                        variant="secondary"
                        size="md"
                        key={tag._id}
                        className="flex gap-1"
                        endIcon={
                          <CrossIcon
                            key={tag._id}
                            className="cursor-pointer"
                            onClick={() => {
                              setContentForm((prev) => {
                                const updatedSelectedTags = prev.tags.filter(
                                  (t) => t._id !== tag._id
                                );

                                return {
                                  ...prev,
                                  tags: updatedSelectedTags,
                                };
                              });
                            }}
                          />
                        }
                      >
                        #{tag.name}
                      </Button>
                    );
                  })}
                </div>
              )}
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
