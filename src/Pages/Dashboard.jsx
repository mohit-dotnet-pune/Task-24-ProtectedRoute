import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const Dashboard = () => {
  const { email } = useContext(AuthContext);

  return <h1>Welcome {email}</h1>;
};
