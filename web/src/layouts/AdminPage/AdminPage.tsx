import { FC, ReactNode } from "react";

import { Header } from "@/components";

interface AdminPageProps {
  children: ReactNode;
}

const AdminPage: FC<AdminPageProps> = ({ children }) => {
  return (
    <div>
      <Header $isadminheader />

      {children}
    </div>
  );
};

export default AdminPage;
