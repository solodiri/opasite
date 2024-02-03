import { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const [click, sectClick] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // console.log("I was Cliked");
    e.preventDefault();
    sectClick("Thanks 4 Subscribing ");
    setTimeout(() => {
      sectClick("");
    }, 3000);
    setEmail("");
  };
  return (
    <>
      <div className="footer">
        {/* <Link className="logoFooter1" to="/">
          <span className="logoFooter">OPA</span>
        </Link> */}

        <div className="myfooter">
          <div className="location">
            <h5 className="newsLetter">Location:</h5>
            <div className="social">100 Afam Power Plant </div>
            <div className="social">Road, Okoloma Afam</div>
            <div className="social">Ndoki Port Harcourt </div>
            <div className="social">Rivers State</div>
          </div>
          <div className="contact">
            <h5 className="newsLetter">Connections:</h5>
            <div className="social">
              <Link to="/faq">FAQ</Link>
            </div>

            <div className="social">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="social">
              <Link to="/support">Support</Link>
            </div>
            <div className="social">
              <Link to="/sponsorships">Sponsorships</Link>
            </div>
            <div className="social">
              <Link to="/donations">Donations</Link>
            </div>
          </div>
          <div className="membership">
            <h5 className="newsLetter">Links:</h5>

            <div className="social">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="social">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="social">
              <Link to="/Constitution">Constitution</Link>
            </div>
            <div className="social">
              <Link to="/contact">Phone No.</Link>
            </div>
            <div className="social">
              <Link to="/visitor">Visitor </Link>
            </div>
          </div>
          <div className="socialmedia">
            <h5 className="newsLetter">Socials:</h5>
            <div className="social">
              <Link to="https://www.facebook.com/opa">Face Book</Link>
            </div>
            <div className="social">
              <Link to="https://www.x.com/opa">X</Link>
            </div>
            <div className="social">
              <Link to="https://www.instagram.com/opa">Instagram</Link>
            </div>
            <div className="social">
              <Link to="https://www.youTube.com/opa">You Tube</Link>
            </div>
            <div className="social">
              <Link to="https://www.discord.com/opa">Discord</Link>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h5 className="newsLetter">Subscribe to our News Letters</h5>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                // sectClick("");
              }}
              value={email}
              className="inputBox"
              type="text"
              placeholder="Email"
              required
            />
            <br />

            <button
              className="readmore btn"
              // onClick={(e) => {
              //   e.preventDefault();
              //   sectClick("Thanks 4 Subscribing ");
              //   setTimeout(() => {
              //     sectClick("");
              //   }, 3000);
              // }}
            >
              Subscribe
            </button>

            <div className="subscribe">{click}</div>
          </form>
        </div>

        <div className="conditions">
          <Link to="/conditions">
            <h5 className="footerConditions"> Terms and Conditions</h5>
          </Link>

          <div className="bar"> | </div>

          <Link to="/privacy">
            <h5 className="footerConditions"> Privacy Policy</h5>
          </Link>
        </div>
      </div>
      <div className="copyrightBg">
        <div className="copyright">
          <h4>
            Copyright @ 2010-2024 Opubo Progresive Association(OPA). All Right
            Reserve
          </h4>
        </div>
        <div className="diriRight">
          <h5>WebSite Degined/Powered By Engr. Diri Solomon - 0803 750 3775</h5>
        </div>
      </div>
    </>
  );
};
export default Footer;
