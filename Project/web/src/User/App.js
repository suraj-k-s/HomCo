import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Payement from "./pages/PaymentGateway/CreditCard";
import List from "./pages/list/List";
import BookNow from "./pages/list/BookNow";
import BookingList from "./pages/list/BookingList";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<List/>}/>
        <Route path="/Bookings" element={<BookingList/>}/>
        <Route path="/Payment" element={<Payement/>}/>
        <Route path="/BookNow" element={<BookNow/>}/>
      </Routes> 
  );
}

export default App;
