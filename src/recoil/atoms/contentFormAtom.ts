import { atom } from "recoil";
import type { TagType } from "../../types";

export type ContentFormStateType = {
  title: string;
  link: string;
  type: "link" | "youtube" | "tweet" | "document";
  open: boolean;
  tagOptions: TagType[];
  tags: TagType[];
  loadingTags: boolean;
};

export const defaultContentForm: ContentFormStateType = {
  title: "",
  link: "",
  type: "link",
  open: false,
  tagOptions: [],
  tags: [],
  loadingTags: true,
};

export const contentFormAtom = atom<ContentFormStateType>({
  key: "contentFormAtom",
  default: defaultContentForm,
});
