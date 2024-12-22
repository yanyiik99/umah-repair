import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Jasadetail from "./pages/JasaDetail";
import UserTransaksi from "./pages/Transaksi/UserTransaksi";
import Profile from "./pages/Profile";
import ScrollTop from "./components/ScrollTop";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import Dashboard from "./admin/Dashboard";
import MasterMember from "./admin/Member";
import AdminRoute from "./Layout/AdminRoute";
import Jasa from "./pages/Jasa";

function App() { 

  useEffect(()=>{
    AOS.init({
      once: true
    })
  },[]);

  return (
    <>
      <div>
        <ScrollTop>
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/jasa" element={<Jasa/>} />
              <Route path="/jasadetail" element={<Jasadetail/>} />
              <Route path="/proses-transaksi" element={<UserTransaksi/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/auth/login" element={<LoginUser/>} />
              <Route path="/auth/register" element={<RegisterUser/>} />
              {/* <Route path="/admin/dashboard" element={<Dashboard/>} /> */}
              <Route 
                exact
                path="/admin/dashboard" 
                element={<AdminRoute component={<Dashboard/>} />} />
              <Route 
                exact
                path="/admin/member" 
                element={<AdminRoute component={<MasterMember/>} />} />
          </Routes>
        </ScrollTop>
      </div>
    </>
  )
}

export default App
