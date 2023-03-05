import "./propertyList.css";
import cleaningImg from "../../Assets/cleaningImg.jpg";
import carpentryimg from "../../Assets/carpentryimg.jpg";
import Electricalimg from "../../Assets/Electricalimg.jpg";
import ComRepair from "../../Assets/ComRepair.jpg";
import plumbing from "../../Assets/plumbing.jpeg";
const PropertyList = () => { 
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src={carpentryimg}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Carpentry</h1>
         
        </div>
      </div>
      <div className="pListItem">
        <img
          src={ComRepair}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Computer Repairs</h1>
          
        </div>
      </div>
      <div className="pListItem">
        <img
          src={Electricalimg}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Electrical Works</h1>
          
        </div>
      </div>
      <div className="pListItem">
        <img
          src={plumbing}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Plumbing</h1>
         
        </div>
      </div>
      <div className="pListItem">
        <img
          src={cleaningImg}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cleaning</h1>
          
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
