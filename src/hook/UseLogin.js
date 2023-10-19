import { useContext } from "react";
import { LoginContext } from "./../hoc/LoginProvider";

export const useLogin = () => useContext( LoginContext)