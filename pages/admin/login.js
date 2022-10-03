import React, { useEffect, useState } from "react";
import LoginForm from "../../components/forms/LoginForm";
import { getSession } from "next-auth/client";

import { useRouter } from "next/router";
const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/admin");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <LoginForm />;
};

export default Login;
