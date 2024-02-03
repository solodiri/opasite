import "./card.css";

const Cards = ({ item }) => {
  const { image, name, post, profession, id } = item;
  return (
    <>
      <div key={id} className="card-container">
        <div className="card">
          <div className="cardimageCover">
            <img className="cardHeaderImg" src={image} alt="headerImage" />
          </div>
          <div className="cardInfo">
            <h4 className="name">{name}</h4>
            <h4 className="position">{post}</h4>
            <h6 className="profession">{profession}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
