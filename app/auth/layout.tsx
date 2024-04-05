import { FC, ReactNode } from "react";

export interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center bg-sky-600">
      {children}
    </div>
  );
};

export default AuthLayout;
