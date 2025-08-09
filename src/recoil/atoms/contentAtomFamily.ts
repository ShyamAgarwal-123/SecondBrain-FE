import { atomFamily } from "recoil";
import type { ContentType } from "../../types";

export const contentAtomFamily = atomFamily<ContentType, string>({
  key: "contentAtomFamily",
  default: (id) => ({
    _id: id,
    title: "",
    link: "",
    type: "document",
    userID: "",
    tags: [],
    createdAt: new Date().toISOString(),
  }),
});
