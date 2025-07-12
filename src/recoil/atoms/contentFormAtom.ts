import { atom } from "recoil";

export type ContentFormStateType = {
  title: string;
  link: string;
  type: "link" | "youtube" | "tweet" | "document";
  tags: string[];
  open: boolean;
};

export const defaultContentForm: ContentFormStateType = {
  title: "",
  link: "",
  type: "link",
  tags: ["6871509e90e4e9181e89bddc"],
  open: false,
};

export const contentFormAtom = atom<ContentFormStateType>({
  key: "contentFormAtom",
  default: defaultContentForm,
});
