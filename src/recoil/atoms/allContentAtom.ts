import { atom, type RecoilState } from "recoil";
import type { ContentType } from "../../types";

export interface AllContentAtomStateType {
  contents: ContentType[];
  loading: boolean;
  error: string | null;
}

export const defaultAllContent: AllContentAtomStateType = {
  contents: [],
  loading: false,
  error: null,
};

export const allContentAtom: RecoilState<AllContentAtomStateType> =
  atom<AllContentAtomStateType>({
    key: "allContentAtom",
    default: defaultAllContent,
  });
