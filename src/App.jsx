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
import Testimoni from "./pages/Testimoni";
import Kontak from "./pages/Kontak";

import AuthProvider from "./providers/AuthProvider";
import LoginAdmin from "./pages/LoginAdmin";
import MemberProvider from "./providers/MemberProvider";
import MasterSkillStaff from "./admin/Staff/skill";

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
                  <Route path="/testimonial" element={<Testimoni/>} />
                  <Route path="/kontak-kami" element={<Kontak/>} />
                  <Route path="/jasadetail/:id" element={<Jasadetail/>} />
                  <Route path="/proses-transaksi" element={<UserTransaksi/>} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/profile/transaksi" element={<ProfileTransaksi/>} />
                  <Route path="/profile/detail-transaksi" element={<DetailProfileTransaksi/>} />
                  <Route path="/auth/login" element={<LoginUser/>} />
                  <Route path="/auth/register" element={<RegisterUser/>} />
                  {/* <Route path="/admin/dashboard" element={<Dashboard/>} /> */}
                  <Route path="/ternaklele/admin/login" element={<LoginAdmin/>} />
                  <Route 
                    exact
                    path="/ternaklele/admin/dashboard" 
                    element={<PrivateRoute component={<Dashboard/>} />} />
                  <Route 
                    exact
                    path="/ternaklele/admin/member" 
                    element={<PrivateRoute component={<MasterMember/>} />} />
                  <Route 
                    exact
                    path="/ternaklele/admin/skill_staff" 
                    element={<PrivateRoute component={<MasterSkillStaff/>} />} />
                  <Route 
                    exact
                    path="/ternaklele/admin/staff" 
                    element={<PrivateRoute component={<MasterStaff/>} />} />
                  <Route 
                    exact
                    path="/ternaklele/admin/layanan" 
                    element={<PrivateRoute component={<MasterLayanan/>} />} />
                  <Route 
                    exact
                    path="/ternaklele/admin/transaksi" 
                    element={<PrivateRoute component={<MasterTransaksi/>} />} />
              </Routes>
          </AuthProvider>
        </ScrollTop>
      </div>
    </>
  )
}

export default App
