import "./Home.css";
import { Link } from "react-router-dom";
import { lists } from "../components/Data";
// import imgBg2 from "./asset/pages/chris.png";
import imgbg2 from "./Jaja.jpg";
// import CardRender from "../components/CardRender";
import Cards from "../components/Cards";
// import imgbg from "./7.jpg";

const Home = () => {
  // console.log(lists);
  return (
    <>
      <div className="homeContainer">
        <h1 className="heading">
          The Making of
          <span className="history"> Historical Ibani People in Opobo</span> and
          its Environs.
        </h1>
        <p className="subheading">We are the Trailblazers.</p>
        <span className="motto">(Mingi Chikiri fa fagha)</span>
        <Link to="/details">
          <button className="readmore btn">Read More</button>
        </Link>
      </div>
      <img className="headerImage" src={imgbg2} alt="headerImage" />
      <div className="video">
        <video
          className="headerImage"
          src="images/uke groups.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="executive"> THE OPA EXECUTIVE</div>

      <section className="homeCard">
        {lists.map((item) => {
          return <Cards item={item} key={item.id} />;
        })}
      </section>
      <div className="video">
        <video
          className="headerImage"
          src="images/culture.mp4"
          autoPlay
          muted
          loop
        />
        {/* <img className="imgOnVideo" src="images/youths.jpg" alt="headerImage" /> */}
      </div>
    </>
  );
};
export default Home;
