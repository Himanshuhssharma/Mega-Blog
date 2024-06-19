import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = ({ children, authetication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // if(authStatus === true) navigate("/")
    // else if(authStatus === false) navigate("/login")

    // let authValue = authStatus === true ? true : false

    if (authetication && authStatus !== authetication) navigate("/login");
    else if (!authetication && authStatus !== authetication) navigate("/");

    setLoader(false);
  }, [authStatus, authetication, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default AuthLayout;
