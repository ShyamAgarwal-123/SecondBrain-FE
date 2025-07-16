import { getAllShareBrainContentService } from "../services";
import { useState } from "react";
import type { ResponseType } from "../types";
import {
  allSharedContentAtom,
  defaultAllSharedContent,
  type AllSharedContentAtomStateType,
} from "../recoil/atoms/allSharedContentAtom";
import { useRecoilState } from "recoil";

export const useSharedAllContentState = () => {
  const [allSharedContent, setSharedAllContent] =
    useRecoilState<AllSharedContentAtomStateType>(allSharedContentAtom);
  return { allSharedContent, setSharedAllContent };
};

const useAllSharedContent = () => {
  const {
    allSharedContent: sharedContent,
    setSharedAllContent: setSharedContent,
  } = useSharedAllContentState();
  const [fetched, setFetched] = useState(false);

  async function fetchAllSharedContent(shareLink: string | undefined) {
    if (sharedContent.loading || fetched || !shareLink) return;
    try {
      setSharedContent((prev) => ({ ...prev, loading: true }));
      await new Promise((res) => {
        setTimeout(() => res(1), 1000);
      });
      const data: ResponseType = await getAllShareBrainContentService(
        shareLink
      );

      if (data.success) {
        setSharedContent({
          ...defaultAllSharedContent,
          contents: data.data?.content,
          username: data.data?.username,
        });
      } else {
        setSharedContent({ ...defaultAllSharedContent, error: data.message });
      }
      setFetched(true);
    } catch (data: any) {
      if (data.statusCode === 404 && data.message === "Invalid link") {
        alert("invlid link");
      }
      setSharedContent((prev) => ({ ...prev, loading: false }));
    }
  }

  return { sharedContent, setSharedContent, fetchAllSharedContent };
};

export default useAllSharedContent;
