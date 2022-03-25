import { FC } from "react";
import { Outlet } from "react-router";

import { Layout } from "../Layout";

export const Route: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
