import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Jasadetail from "./pages/Jasadetail";
import Profile from "./pages/Profile";

function App() {  

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/jasadetail" element={<Jasadetail/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
