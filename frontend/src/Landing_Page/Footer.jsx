import "./Footer.css";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top">
        <div className="row  mt-5">
          <div className="col-lg-3 col-sm-6">
            <img
              className="ms-4 ps-4 "
              src="media/images/logo.svg"
              alt="Logo_Image"
            />
            <p>
              &copy; 2010 - 2024, Not SwiftTrade Broking Ltd. All rights
              reserved.
            </p>
            <div>
              <span>
                <a href="" className="links">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </span>
              <span>
                <a href="" className="links">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </span>
              <span>
                <a href="" className="links">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </span>
              <span>
                <a href="" className="links">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </span>
              <span>
                <a href="" className="links">
                  {" "}
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <p>Company</p>
            <a href="" className="links">
              About
            </a>
            <br />
            <a href="" className="links">
              Products
            </a>
            <br />
            <a href="" className="links">
              Pricing
            </a>
            <br />
            <a href="" className="links">
              Referral programme
            </a>
            <br />
            <a href="" className="links">
              Careers
            </a>
            <br />
            <a href="" className="links">
              SwiftTrade.tech
            </a>
            <br />
            <a href="" className="links">
              Press & media
            </a>
            <br />
            <a href="" className="links">
              SwiftTrade cares (CSR)
            </a>
            <br />
          </div>
          <div className="col-lg-3 col-sm-6">
            <p>Support</p>
            <a href="" className="links">
              Contact
            </a>
            <br />
            <a href="" className="links">
              Support portal
            </a>
            <br />
            <a href="" className="links">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="links">
              List of charges
            </a>
            <br />
            <a href="" className="links">
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col-lg-3 col-sm-6">
            <p>Account</p>
            <a href="" className="links">
              Open an account
            </a>
            <br />
            <a href="" className="links">
              Fund transfer
            </a>
            <br />
            <a href="" className="links">
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            SwiftTrade Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
            no.: INZ000031633 CDSL: Depository services through SwiftTrade
            Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
            Commodity Trading through SwiftTrade Commodities Pvt. Ltd. MCX:
            46025 – SEBI Registration no.: INZ000038238 Registered Address:
            SwiftTrade Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
            Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India. For any complaints pertaining to securities
            broking please write to complaints@SwiftTrade.com, for DP related to
            dp@SwiftTrade.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of SwiftTrade and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="text-center">
          <span>
            <a href="" className="links me-5">
              NSE
            </a>
          </span>
          <span>
            <a href="" className="links me-5">
              BSE
            </a>
          </span>
          <span>
            <a href="" className="links me-5">
              MCX
            </a>
          </span>
          <span>
            <a href="" className="links me-5">
              Terms & Conditions
            </a>
          </span>
          <span>
            <a href="" className="links me-5">
              Policies & Procedures
            </a>
          </span>
          <span>
            <a href="" className="links me-5">
              Privacy Policy
            </a>
          </span>
          <span>
            <a href="" className="links">
              Disclosure
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
