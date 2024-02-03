import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className=" details">
        <div className=" detailsBox">
          <h2>This Page is Under Construction</h2>
          <p>Please visite OPUBO PROGRESSIVE ASSOCIATION Home Page</p>
          <Link to="/">
            <button className="readmore btn">Back Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
