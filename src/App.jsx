import { Route, Routes } from "react-router-dom"
import { useEffect } from "react";

import AOS from "aos";
import 'aos/dist/aos.css';

import Homepage from "./pages/Homepage";
import Jasadetail from "./pages/JasaDetail";
import ProfileTransaksi from "./pages/ProfileTransaksi";
import DetailProfileTransaksi from "./pages/DetailProfileTransaksi";
import Profile from "./pages/Profile";
import UserTransaksi from "./pages/Transaksi/UserTransaksi";
import ScrollTop from "./components/ScrollTop";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import Dashboard from "./admin/Dashboard";
import MasterMember from "./admin/Member";
import MasterStaff from "./admin/Staff";
import MasterLayanan from "./admin/Layanan";
import MasterTransaksi from "./admin/Transaksi";
import PrivateRoute from "./Layout/PrivateRoute";
import Jasa from "./pages/Jasa";

import AuthProvider from "./providers/AuthProvider";
import LoginAdmin from "./pages/LoginAdmin";

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
        <AuthProvider>
          <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/jasa" element={<Jasa/>} />
              <Route path="/jasadetail/:id" element={<Jasadetail/>} />
              <Route path="/proses-transaksi" element={<UserTransaksi/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/profile/transaksi" element={<ProfileTransaksi/>} />
              <Route path="/profile/detail-transaksi" element={<DetailProfileTransaksi/>} />
              <Route path="/ternaklele/admin/login" element={<LoginAdmin/>} />
              <Route path="/auth/login" element={<LoginUser/>} />
              <Route path="/auth/register" element={<RegisterUser/>} />
              {/* <Route path="/admin/dashboard" element={<Dashboard/>} /> */}
              <Route exact path="/ternaklele/admin/dashboard" element={<Dashboard/>} />
              <Route exact path="/ternaklele/admin/member" element={<MasterMember/>} />
              <Route exact path="/ternaklele/admin/staff" element={<MasterStaff/>} />
              <Route exact path="/ternaklele/admin/layanan" element={<MasterLayanan/>} />
              <Route exact path="/ternaklele/admin/transaksi" element={<MasterTransaksi/>} />
          </Routes>
        </AuthProvider>
        </ScrollTop>
      </div>
    </>
  )
}

export default App
