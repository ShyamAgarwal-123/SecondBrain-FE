import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/atoms/userAtom";

const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);

  return { user, setUser };
};

export default useUser;
