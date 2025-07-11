import Button from "../ui/Button";
import Input from "../ui/Input";
import { signInService } from "../../services";
import { useState } from "react";
import useSignIn from "../../hooks/useSignIn";
import { signInDefault } from "../../recoil/atoms/signInAtom";
import useUser from "../../hooks/useUser";
import type { IGetUser } from "../../hooks/useUserAuth";
import { defaultUser } from "../../recoil/atoms/userAtom";

const CreateSignInModal = () => {
  const { signIn, onChange, setSignIn } = useSignIn();
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((res, rej) => {
      setTimeout(() => res(1), 2000);
    });
    const data: IGetUser = await signInService(signIn);
    if (data.success) {
      setUser({
        username: data.data.username,
        email: data.data.email,
        authenticated: true,
      });
      setSignIn(signInDefault);
    } else {
      setUser(defaultUser);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <span className="bg-white rounded-2xl p-4 flex flex-col items-center">
        <div>Sign In</div>
        <div className="flex flex-col">
          <Input placeholder="Email" onChange={onChange} value={signIn.email} />
          <Input
            placeholder="Password"
            type="password"
            onChange={onChange}
            value={signIn.password}
          />
        </div>
        <div>
          <Button
            variant="primary"
            onClick={onSubmit}
            size="md"
            className="cursor-pointer"
            loading={loading}
          >
            Sign In
          </Button>
        </div>
      </span>
    </div>
  );
};

export default CreateSignInModal;
