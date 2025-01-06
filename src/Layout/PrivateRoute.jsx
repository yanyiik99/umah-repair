/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import MainLayout from "./Main";
import { AuthContext } from "../providers/AuthProvider";
import LoginAdmin from "../pages/LoginAdmin";


const PrivateRoute = ({ requiredRole, component }) => {
  const { isLoggedIn, roles } = useContext(AuthContext);
  console.log("PrivateRoute -> isLoggedIn", isLoggedIn);
  console.log("Your Roles -> roles: ", roles);


  if(isLoggedIn){
    return <MainLayout> {component} </MainLayout>;
  }

  return <LoginAdmin/>;

};

export default PrivateRoute;
