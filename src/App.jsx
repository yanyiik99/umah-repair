import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Jasadetail from "./pages/JasaDetail";
import UserTransaksi from "./pages/Transaksi/UserTransaksi";

function App() {  

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/jasadetail" element={<Jasadetail/>} />
            <Route path="/proses-transaksi" element={<UserTransaksi/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
