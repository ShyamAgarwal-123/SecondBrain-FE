import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/atoms/userAtom";
import axios from "axios";

const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);

  return { user };
};

export default useUser;
