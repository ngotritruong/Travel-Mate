
import Header from "../../components/header/Header";
import heroHeader from "../../Image/heroHeader.mp4";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeatureProperty from "../../components/featureProperty/FeatureProperty";
import ConnectPanner from "../../components/connectPanner/ConnectPanner";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <video className="videoHero" autoPlay loop muted>
          <source src={heroHeader} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
      </div>
      <div className="homContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love </h1>
        <FeatureProperty />
        <h1 className="homeTitle">Connect with other travelers</h1>
        <ConnectPanner />
        <EmailFeedBack />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
