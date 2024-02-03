import "./Details.css";
const Blog = () => {
  return (
    <>
      <div className=" details">
        <div className=" detailsBox">
          <h2>Blog</h2>

          <img
            className=" projectImg"
            src="/images/opapix1.jpg"
            alt="projectImg"
          />
          <h2>Prime Minister Ceremony</h2>
          <p>
            The event of the Coronation and recognition of the Prime Minister of
            Okoloma Kingdom in Afam.
          </p>
          <img
            className=" projectImg"
            src="/images/opapix2.jpg"
            alt="projectImg"
          />
          <h2>OPA Members with Prime Minister</h2>
          <p>
            The event of the Coronation and recognition of the Prime Minister of
            Okoloma Kingdom in Afam, the person of Chief Prime Minister at the
            middle with full regalia.
          </p>
        </div>
      </div>
    </>
  );
};
export default Blog;
