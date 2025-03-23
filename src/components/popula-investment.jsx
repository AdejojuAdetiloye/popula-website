import "../components/popula-investment.css";

export default function PopulaInvestment() {
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
            <h1 className="investment-details-title">
              Popula Investment
            </h1>
            <h4 className="investment-description">
              At Popula Investment, we have prefessional and financial analysts
              with many years of experience in analysing and trading
              Crypto,Forex,Indices and other Stocks markets with the sole of
              pulling profit. We make use of advance trading set ups and tactics
              to maximize profits so our investors can always smile when
              credited. We trade different sessions making use of our advance
              tools and keep enriching our investors. To become part of our
              investors, click on the Whatsapp icon at the top to get started
              now!
            </h4>
          </div>
        </div>
      </div>
      <div className="investment-overlay-div">
        <img
          src={require("../assets/images/chart.jpg")}
          alt="thumbnail"
          className="investment-image-in"
        />
        <div>
          <h4 className="investment-name">Popula Financial Analysts</h4>
          <h6 className="investment-role">
            We are a group of professional Analysts and traders with many years
            of experience in trading Crypto, Forex,Indices and other Stocks
            market for purpose of amassing profits and making our investors
            smilling always.
          </h6>
        </div>
      </div>
    </>
  );
}
