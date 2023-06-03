import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
