import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Admin/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">List</h3>
          <ul className="sidebarList">
            <Link to="/Admin/UserList" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/Admin/WorkerList" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Worker
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Basic Datas</h3>
          <ul className="sidebarList">
           
          <Link to="/Admin/District" className="link">
              <li className="sidebarListItem">
                District
              </li>
            </Link>
            <Link to="/Admin/Place" className="link">
              <li className="sidebarListItem">
                Place
              </li>
            </Link>
            <Link to="/Admin/Type" className="link">
              <li className="sidebarListItem">
                Type
              </li>
            </Link>
             <li className="sidebarListItem">
              Complaint Type
            </li> 
          </ul> */}
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Others</h3>
          <ul className="sidebarList">
            {/* <li className="sidebarListItem">
              Complaint
            </li>
            <li className="sidebarListItem">
              Feedback
            </li> */}
            <Link to="../Login" className="link">
              <li className="sidebarListItem">
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
