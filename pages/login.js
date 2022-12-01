import React, {useLayoutEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import LoginPageContent from "../components/LoginPageContent/LoginPageContent";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  useLayoutEffect(() => {
    localStorage.getItem("user") && router.push("/account");
  }, []);
  return (
    <MainLayout pagetitle="Log In">
      <LoginPageContent />
    </MainLayout>
  );
}
export default Login;
