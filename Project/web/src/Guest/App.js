import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import Worker from "./pages/Worker/Worker";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/WorkerRegistration" element={<Worker/>}/>
        <Route path="/UserRegistration" element={<User/>}/>
      </Routes> 
  );
}

export default App;
