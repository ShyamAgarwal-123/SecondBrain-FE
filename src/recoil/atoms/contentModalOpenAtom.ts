import { atom, type RecoilState } from "recoil";

export type ContentModalOpenStateType = boolean;

export const contentModalOpenDefault: ContentModalOpenStateType = false;

export const contentModalOpenAtom: RecoilState<ContentModalOpenStateType> =
  atom<ContentModalOpenStateType>({
    key: "contentModalOpenAtom",
    default: contentModalOpenDefault,
  });
