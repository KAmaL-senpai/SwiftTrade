import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a SwiftTrade account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          className="btn btn-primary fs-5 p-2 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          to={"/signup"}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
