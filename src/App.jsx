import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TokenExchangeBar from "./components/TokenExchange/TokenExchangeBar";
import Cards from "./components/Cards/Cards";
import Claims from "./components/Claims/Claims";
import GetCovered from "./components/GetCovered/GetCovered";
import Footer from "./components/Footer/Footer";
// import TokenExchangeCard from "./components/TokenExchange/TokenExchangeCard";

function App() {
  return (
    <div className="bg-[#f9f9fe]">
      <Navbar />
      <TokenExchangeBar />
      <div className="container">
        {/* <Cards />
        <Claims /> */}
        <GetCovered />
        <Footer />
      </div>
    </div>
  );
}

export default App;
