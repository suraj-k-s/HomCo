import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import BookingList from "./pages/list/BookingList";
import Request from "./pages/Request/request";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Request" element={<BookingList/>}/>
      </Routes> 
  );
}

export default App;
