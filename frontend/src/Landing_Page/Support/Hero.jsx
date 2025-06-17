import "./Hero.css";
function Hero() {
  const links = { color: "white" };
  return (
    <section className="container-fluid" id="hero">
      <div className="p-3" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="" style={{ textDecoration: "none", color: "white" }}>
          Track Tickets <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="container">
        <div className="row  m-3 p-3">
          <div className="col-lg-6 mb-5 p-5">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input type="text" placeholder="Eg. how do I activate F&O" />
            <br />
            <a href="" style={links}>
              Track account opening
            </a>{" "}
            &nbsp;
            <a href="" style={links}>
              Track segment activation
            </a>{" "}
            &nbsp;
            <a href="" style={links}>
              Intraday margins
            </a>{" "}
            &nbsp;
            <a href="" style={links}>
              Kite user manual
            </a>
          </div>
          <div className="col-lg-6 mb-5 p-5">
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li>
                <a href="" style={links}>
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="" style={links}>
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
