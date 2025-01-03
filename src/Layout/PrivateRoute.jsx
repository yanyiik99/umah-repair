/* eslint-disable react/prop-types */
import { useContext } from "react";
import MainLayout from "./Main";
import { AuthContext } from "../providers/AuthProvider";
import LoginUser from "../pages/LoginUser";
import LoginAdmin from "../pages/LoginAdmin";


const PrivateRoute = ({ component }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("PrivateRoute -> isLoggedIn", isLoggedIn);

  if(isLoggedIn){
    return <MainLayout> {component} </MainLayout>;
  }

  return <LoginAdmin/>;

};

export default PrivateRoute;
