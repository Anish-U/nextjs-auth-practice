import { FC } from "react";

import LoginForm from "@/components/auth/LoginForm";

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return <LoginForm />;
};

export default LoginPage;
