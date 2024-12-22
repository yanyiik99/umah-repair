/* eslint-disable react/prop-types */
import MainLayout from "./Main";


const AdminRoute = ({ component }) => {

  return <MainLayout> {component} </MainLayout>;
};

export default AdminRoute;
