import {
  Routes,
  Route,
} from "react-router-dom";
import AApp from "./Admin/App";
import UApp from "./User/App";
import WApp from "./Worker/App";
import GApp from "./Guest/App";


function App() {
  return (
    <Routes>
      <Route path="/Admin/*" element={<AApp />} />
      <Route path="/User/*" element={<UApp />} />
      <Route path="/Worker/*" element={<WApp />} />
      <Route path="/*" element={<GApp />} />
    </Routes>
  );
}

export default App;
