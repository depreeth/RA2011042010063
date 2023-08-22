
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";


function App() {
  return (
    <>
<BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
