import { useRecoilState } from "recoil";
import {
  defaultTags,
  tagsAtom,
  type TagsAtomStateType,
} from "../recoil/atoms/tagsAtom";
import { getAllTagsService } from "../services";
import type { ResponseType } from "../types";

const useTags = () => {
  const [tags, setTags] = useRecoilState<TagsAtomStateType>(tagsAtom);

  const fetchAllTags = async () => {
    try {
      setTags((prev) => ({ ...prev, loading: true }));
      const data: ResponseType = await getAllTagsService();
      if (data.success) {
        setTags({
          tags: data.data,
          loading: false,
        });
      } else setTags(defaultTags);
    } catch (data: any) {
      console.log(data);
    } finally {
      setTags((prev) => ({ ...prev, loading: false }));
    }
  };

  return { tags, setTags, fetchAllTags };
};

export default useTags;
