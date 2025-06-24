import { useNavigate } from "react-router-dom";
import "../components/popula-investment.css";

export default function PopulaInvestment() {
  const navigate = useNavigate();
  //go to investment page
  function goToInvestmentPage() {
    navigate("/invest");
  }

  return (
    <>
      <div className="investment-div">
        <div className="investment-row">
          <div className="investment-image">
            <img
              src={require("../assets/images/coins.jpg")}
              alt="development"
              className="investment-image"
            />
          </div>
          <div className="investment-details">
            <h1 className="investment-details-title">Popula Pips</h1>
            <h4 className="investment-description">
              At Popula Pips, we have prefessional and financial analysts with
              many years of experience in analysing and trading
              Crypto,Forex,Indices and other Stocks markets with the goal of
              pulling profit. We make use of advance trading set ups and tactics
              to maximize profits so our investors can always smile. You also
              can <span className="get-started" onClick={goToInvestmentPage}>Get Started </span> Now!
            </h4>
          </div>
        </div>
      </div>
      <div className="investment-overlay-div">
        <img
          src={require("../assets/images/popula-pips.png")}
          alt="thumbnail"
          className="investment-image-in"
        />
        <div>
          <h4 className="investment-name">Popula Financial Analysts</h4>
          <h6 className="investment-role">
            We are a group of professional Analysts and traders with many years
            of experience in trading Crypto, Forex,Indices and other Stocks
            market making our investors smile always.
          </h6>
        </div>
      </div>
    </>
  );
}
