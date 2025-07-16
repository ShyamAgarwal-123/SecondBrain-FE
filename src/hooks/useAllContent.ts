import { useRecoilState } from "recoil";
import {
  allContentAtom,
  defaultAllContent,
  type AllContentAtomStateType,
} from "../recoil/atoms/allContentAtom";
import { getAllContentsService } from "../services";
import { useState } from "react";
import type { ResponseType } from "../types";
import useUserAuth from "./useUserAuth";

export const useAllContentState = () => {
  const [allContent, setAllContent] =
    useRecoilState<AllContentAtomStateType>(allContentAtom);
  return { allContent, setAllContent };
};

const useAllContent = () => {
  const { allContent, setAllContent } = useAllContentState();
  const { fetchUser } = useUserAuth();
  const [fetched, setFetched] = useState(false);

  async function fetchAllContent() {
    if (allContent.loading || fetched) return;
    try {
      setAllContent((prev) => ({ ...prev, loading: true }));
      await new Promise((res) => {
        setTimeout(() => res(1), 1000);
      });
      const data: ResponseType = await getAllContentsService();
      if (data.success) {
        setAllContent({ ...defaultAllContent, contents: data.data });
      } else {
        setAllContent({ ...defaultAllContent, error: data.message });
      }
      setFetched(true);
    } catch (data: any) {
      if (data?.success) {
        fetchAllContent();
      } else if (!data?.success && data?.message === "Refresh Token Required") {
        fetchUser();
      }
      setAllContent((prev) => ({ ...prev, loading: false }));
      console.log(data);
    }
  }

  return { allContent, setAllContent, fetchAllContent };
};

export default useAllContent;
