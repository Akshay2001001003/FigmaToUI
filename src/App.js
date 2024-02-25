import "./App.css";
import Header from "./components/Header";
import Heading from "./components/Heading";
import tick from "./assets/tick.png";
import info from "./assets/info.png";
import dd from "./assets/dd.png";
import Option from "./components/Option";
import Directory from "./components/Directory";
import Cards from "./components/Cards";
import { data } from "./components/data.js";
import Course from "./components/Course.jsx";
import Signup from "./components/Signup.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="cnt">
          <div className="main">
            <div style={{ borderBottom: "2px solid #E1E4E6" }}>
              <Heading />
            </div>
            <div className="div2">
              <img
                src={tick}
                alt="img"
                style={{ width: "20px", height: "20px" }}
              />
              <div>Last Updated - Feburary 24, 2024 </div>
              <img src={info} alt="img" />
              <div>Advertising Disclouser</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "46%",
                }}
              >
                <div>Top Relevent</div>
                <img src={dd} alt="img" />
              </div>
            </div>
          </div>
          <Option />
          <Directory />
          <Cards data={data} />
          <div>
            <div className="deals">Related Deals You Might like for</div>
            <div className="course">
              <Course />
              <Course />
              <Course />
            </div>
          </div>
          <Signup />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
