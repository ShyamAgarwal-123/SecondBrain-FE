import { useRecoilState } from "recoil";
import {
  contentFormAtom,
  defaultContentForm,
  type ContentFormStateType,
} from "../recoil/atoms/contentFormAtom";
import { type ChangeEvent } from "react";
import {
  createTagService,
  searchTagsService,
  uploadContentService,
} from "../services";
import type { ResponseType } from "../types";
import useAllContent from "./useAllContent";
import useUserAuth from "./useUserAuth";

export const useContentFormState = () => {
  const [contentForm, setContentForm] =
    useRecoilState<ContentFormStateType>(contentFormAtom);
  return { contentForm, setContentForm };
};

const useContentForm = () => {
  const { contentForm, setContentForm } = useContentFormState();

  const { fetchAllContent } = useAllContent();
  const { fetchUser } = useUserAuth();

  const onSelectChange = (type: string) => {
    if (
      type === "link" ||
      type === "document" ||
      type === "youtube" ||
      type === "tweet"
    ) {
      setContentForm((prev) => {
        return { ...prev, type };
      });
    }
  };

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value, placeholder } = e.target;

    if (placeholder !== "Title") {
      placeholder = "Link";
    }

    if (value.includes("https://x.com/")) {
      setContentForm((p) => ({ ...p, type: "tweet" }));
    } else if (value.includes("https://youtu.be/")) {
      setContentForm((p) => ({ ...p, type: "youtube" }));
    }
    setContentForm((prev) => {
      return { ...prev, [placeholder.toLowerCase()]: value };
    });
  };

  const onSubmit = async () => {
    try {
      const data: ResponseType = await uploadContentService(contentForm);
      if (data.success) {
        setContentForm(defaultContentForm);
        fetchAllContent();
      }
      console.log(data);
    } catch (data: any) {
      if (data?.success) {
        onSubmit();
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        fetchUser();
      } else {
        alert(data.data);
      }
      console.log(data);
    }
  };

  const searchTags = async (tagInput: string) => {
    try {
      if (!tagInput) {
        return;
      }
      setContentForm((prev) => ({ ...prev, loadingTags: true }));
      const data: ResponseType = await searchTagsService(tagInput);
      if (data.success) {
        setContentForm((prev) => {
          return {
            ...prev,
            tagOptions: data.data,
          };
        });
      } else {
        console.log(data);
      }
    } catch (data: any) {
      if (data?.success) {
        searchTags(tagInput);
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        fetchUser();
      } else {
        console.log(data);
      }
    } finally {
      setContentForm((prev) => ({ ...prev, loadingTags: false }));
    }
  };

  const createTag = async (name: string) => {
    try {
      const data: ResponseType = await createTagService(name);
      if (data.success) {
        setContentForm((prev) => ({
          ...prev,
          selectedTags: [...prev.tags, data.data],
        }));
      } else {
        console.log(data);
      }
    } catch (data: any) {
      if (data?.success) {
        createTag(name);
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        fetchUser();
      } else {
        alert(data.data);
      }
    }
  };

  return {
    contentForm,
    setContentForm,
    onSelectChange,
    onInputChange,
    onSubmit,
    createTag,
    searchTags,
  };
};

export default useContentForm;
