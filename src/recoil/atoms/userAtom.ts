import { atom, type RecoilState } from "recoil";

export interface IUserAtom {
  username: string;
  email: string;
  authenticated: boolean;
}

export const defaultUser: IUserAtom = {
  username: "",
  email: "",
  authenticated: false,
};

export const userAtom: RecoilState<IUserAtom> = atom<IUserAtom>({
  key: "userAtom",
  default: defaultUser,
});
