
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <h1 className="homeTitle">Serach by  type</h1>
        <PropertyList/>
        <FeaturedProperties/>
        <MailList/>
      </div>
    </div>
  );
};

export default Home;
