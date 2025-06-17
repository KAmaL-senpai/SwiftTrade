function RightSection({ imageURL, productName, productDesription, learnMore }) {
    const links = { textDecoration: "none" };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={links}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
