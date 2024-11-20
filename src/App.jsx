import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Jasadetail from "./pages/Jasadetail";

function App() {  

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/jasadetail" element={<Jasadetail/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
