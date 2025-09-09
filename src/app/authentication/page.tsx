import Header from "@/components/common/header";
import { db } from "@/db";

import AuthenticationTabs from "./components/authentication-tabs";

const AuthenticationPage = async () => {
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header categories={categories} />
      <AuthenticationTabs />
    </>
  );
};

export default AuthenticationPage;
