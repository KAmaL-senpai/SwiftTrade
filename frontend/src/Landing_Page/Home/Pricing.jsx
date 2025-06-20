function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-12 mb-5">
          <h1 className="mb-3 fs-2">Unbeatable Price</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6 col-sm-12 mb-5">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
