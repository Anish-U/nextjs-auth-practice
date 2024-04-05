import { FC } from "react";

import RegisterForm from "@/components/auth/RegisterForm";

export interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
  return <RegisterForm />;
};

export default RegisterPage;
