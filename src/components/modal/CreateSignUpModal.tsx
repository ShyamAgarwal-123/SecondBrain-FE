import useSignUp from "../../hooks/useSignUp";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { signUpService } from "../../services";
import type { ResponseType } from "../../types";
import { useState } from "react";
import { signUpDefault } from "../../recoil/atoms/signUpAtom";

const CreateSignUpModal = () => {
  const { signUp, onChange, setSignUp } = useSignUp();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((res) => {
      setTimeout(() => res(1), 2000);
    });
    const data: ResponseType = await signUpService(signUp);
    if (data.success) {
      console.log(data.message);
      setSignUp(signUpDefault);
    } else {
      console.log(data.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <span className="bg-white rounded-2xl p-4 flex flex-col items-center">
        <div>Sign Up</div>
        <div className="flex flex-col">
          <Input
            placeholder="Username"
            onChange={onChange}
            value={signUp.username}
          />
          <Input placeholder="Email" onChange={onChange} value={signUp.email} />
          <Input
            placeholder="Password"
            type="password"
            onChange={onChange}
            value={signUp.password}
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
            Sign Up
          </Button>
        </div>
      </span>
    </div>
  );
};

export default CreateSignUpModal;
