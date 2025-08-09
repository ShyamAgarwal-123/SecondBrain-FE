import { atom } from "recoil";
import type { TagType } from "../../types";

export type TagsAtomStateType = {
  tags: TagType[];
  loading: boolean;
};

export const defaultTags: TagsAtomStateType = {
  tags: [],
  loading: false,
};

export const tagsAtom = atom<TagsAtomStateType>({
  key: "tagsAtom",
  default: defaultTags,
});
