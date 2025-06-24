import CustomInput from "./components/CustomInput";
import Nav from "./components/nav";
import "./InvestNow.css";
import icon from "./assets/icons/mask.png";
import CustomButton from "./components/CustomButton";

export default function InvestNow() {
//submit function
function submit(){
  alert("We are working on this page! Please try again later")
}

  return (
    <div className="invest-now-main">
      {/* HEADER */}
      <div className="invest-now-header">
        <Nav />
      </div>
      {/* BODY */}
      <div className="invest-now-body">
        <h1 className="header-title">Invest with us now!</h1>
        <h3 className="description">
          Choose an investment plan that suits you
        </h3>

        <h4 className="details">Submit Your Accurate Details</h4>
        {/* CONTENT */}
        <div className="content">
          <CustomInput
            type={"text"}
            placeholder={"Enter your Full name"}
            icon={icon}
          />
          <CustomInput
            type={"text"}
            placeholder={"Enter your Full Home Address"}
            icon={icon}
          />
          <CustomInput
            type={"tel"}
            placeholder={"Your Phone Number e.g 123-456-7890"}
            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
            icon={icon}
          />
          <CustomInput
            type={"email"}
            placeholder={"Enter your Email"}
            icon={icon}
          />
          <CustomInput
            type={"text"}
            placeholder={"Enter Amount (N100,000) only"}
            icon={icon}
          />
          <div className="button-div">
            <CustomButton
              action={submit}
              text={"SUBMIT DETAILS AND WAIT FOR OUR EMAIL"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
