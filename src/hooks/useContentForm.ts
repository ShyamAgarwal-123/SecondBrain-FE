import { useRecoilState } from "recoil";
import {
  contentFormAtom,
  defaultContentForm,
  type ContentFormStateType,
} from "../recoil/atoms/contentFormAtom";
import { useState, type ChangeEvent } from "react";
import { uploadContentService } from "../services";
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

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;

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

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, placeholder } = e.target;
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
      }
      console.log(data);
    }
  };

  return {
    contentForm,
    setContentForm,
    onSelectChange,
    onInputChange,
    onSubmit,
  };
};

export default useContentForm;
