function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 p-5 mt-3 ">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million SwiftTrade clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row mb-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>{" "}
                </li>
                <li>
                  <p>Commodity derivatives</p>{" "}
                </li>
                <li>
                  <p>Currency derivates</p>{" "}
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>{" "}
                </li>
                <li>
                  <p>Direct mutual funds</p>{" "}
                </li>
                <li>
                  <p> Bonds and</p>{" "}
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Awards_Image"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
