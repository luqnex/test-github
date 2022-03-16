import React, {
  FC,
  FormEvent,
  HTMLAttributes,
  useContext,
  useState,
} from "react";

import UserContext from "../../context/Users";
import { api } from "../../services/api";
import { CustomButton } from "../Button";

export const Form: FC<HTMLAttributes<HTMLFormElement>> = ({ ...props }) => {
  const [input, setInput] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (input !== "") {
      await api.get(`/${input}`).then((resp) => setUser(resp.data));
    }
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <CustomButton itemType="submit" data-testid="search">
        Search
      </CustomButton>
    </form>
  );
};
