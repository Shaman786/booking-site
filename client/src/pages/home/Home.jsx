import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import { Header } from "../../components/header/Header";

export const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
    </>
  );
};

export default Home;
