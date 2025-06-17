import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-5" style={{ marginTop: "100px" }}>
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-lg-4 col-sm-12 p-3 mt-5">
          {" "}
          <img src="media/images/smallcaseLogo.png" width={"40%"} />
          <p className="text-small text-muted mb-5">
            Thematic investment platform
          </p>
          <img src="media/images/zerodhaFundhouse.png" width={"40%"} />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-lg-4 col-sm-12 p-3 mt-5">
          {" "}
          <img src="media/images/streakLogo.png" width={"40%"} />
          <p className="text-small text-muted mb-5">Algo & Strategy Platform</p>
          <img src="media/images/goldenpiLogo.png" width={"40%"} />
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <div className="col-lg-4 col-sm-12 p-3 mt-5">
          {" "}
          <img src="media/images/sensibullLogo.svg" width={"40%"} />
          <p className="text-small text-muted mb-5">Options Trading Platform</p>
          <img src="media/images/dittoLogo.png" width={"40%"} />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <Link
          className="btn btn-primary fs-5 p-2 my-5"
          style={{ width: "20%", margin: "0 auto" }}
          to={"/signup"}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
