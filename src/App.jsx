import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import JasaDetail from "./pages/JasaDetail";

function App() {

  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/jasa-detail" element={<JasaDetail/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
