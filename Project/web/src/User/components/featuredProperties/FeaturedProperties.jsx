import "./featuredProperties.css";
import hservicesnew from "../../Assets/hservicesnew.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem"> 
        <img
          src={hservicesnew}
          alt=""
          className="fpImg"
        />
       
      </div>
      
    </div>
  );
};

export default FeaturedProperties;
