
import "./header.css";
import { useState } from "react";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";

const Header = ({ type }) => {

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Everyday life made easier...
            </h1>
            <p className="headerDesc">
              When life gets busy,you don't have to tackle it alone...
              
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
