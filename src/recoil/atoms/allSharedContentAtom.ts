import { atom, type RecoilState } from "recoil";
import type { ContentType } from "../../types";

export interface AllSharedContentAtomStateType {
  contents: ContentType[];
  username: string;
  loading: boolean;
  error: string | null;
}

export const defaultAllSharedContent: AllSharedContentAtomStateType = {
  contents: [],
  username: "",
  loading: false,
  error: null,
};

export const allSharedContentAtom: RecoilState<AllSharedContentAtomStateType> =
  atom<AllSharedContentAtomStateType>({
    key: "allSharedContentAtom",
    default: defaultAllSharedContent,
  });
