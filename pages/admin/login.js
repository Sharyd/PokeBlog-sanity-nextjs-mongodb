import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import { useRouter } from "next/router";
const Login = ({ admin }) => {
  const router = useRouter();
  if (admin) {
    router.replace("/admin");
  }

  return <>{!admin && <LoginForm />}</>;
};

export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  let admin = null;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  return {
    props: {
      admin: admin,
    },
  };
}

export default Login;
