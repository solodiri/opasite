// import RoasterRender from "../components/RoasterRender";
import { roaster } from "../components/Data";
// import RoasterRender from "../components/RoasterRender";
import "./Events.css";

const Events = () => {
  // console.log(roaster);
  return (
    <>
      <div className=" events">
        <h2>Events</h2>
        <div className=" ">
          <h2>OPUBO PROGRESSIVE ASSOCIATION MEETING ROSTER 2024</h2>
          <table className=" myTable ">
            <thead className=" myTableHeading ">
              <tr>
                <th className=" headBox">S/N</th>
                <th className=" headBox">GROUP/DATE</th>
                <th className=" headBox">NAMES</th>
                <th className=" headBox">PHONE_NO.:</th>
                <th className=" headBox">REMARKS</th>
              </tr>
            </thead>

            <tbody className="tableBody">
              {roaster.map((roast) => {
                return (
                  <tr key={roast.sn}>
                    <td>{roast.sn}</td>
                    <td>{roast.groupDate}</td>
                    <td>{roast.name}</td>
                    <td>{roast.phoneNo}</td>
                    <td>{roast.remarks}</td>
                    {/* <RoasterRender roast={roast} /> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Events;
