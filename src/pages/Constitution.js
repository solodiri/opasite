import { Link } from "react-router-dom";

const Constitution = () => {
  return (
    <>
      <div className=" details">
        <div className=" detailsBox">
          <h2>Constitution</h2>
          <p>
            We the members and successors of OPUBO KINGDOM resident in Ndoki and
            its environs of Oyigbo Local Government Area of Rivers State of
            Nigeria, do hereby firmly and solomnly resolve to evolve an
            effective and responsible management of the members, to stimulate
            and nourish a good search balance among members and their families.
            And where as it is necssary to have a constitution to guard andguide
            the management/government of this meeting OPUBO PROGRESSIVE
            ASSOCIATION PROGRESSIVE ASSOCIATION, we do hereby resolve as follow:
          </p>
          <Link to="/Constitution2">
            <button className="readmore btn">Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Constitution;
