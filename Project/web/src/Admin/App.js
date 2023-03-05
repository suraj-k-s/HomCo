import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import WorkerList from "./pages/workerList/worker";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/WorkerList" element={<WorkerList/>}/>
            <Route path="/UserList" element={< UserList/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
