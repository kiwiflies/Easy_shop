import React, {useLayoutEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import LoginPageContent from "../components/LoginPageContent/LoginPageContent";
import { useRouter } from "next/router";
import { storage } from "../helpers/storage";

function Login() {
  const router = useRouter();

  useLayoutEffect(() => {
    storage().getItem("user") && router.push("/account");
  }, [router]);

  return (
    <MainLayout pagetitle="Log In">
      <LoginPageContent />
    </MainLayout>
  );
}
export default Login;
