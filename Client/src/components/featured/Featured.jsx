import React from "react";
import "./Featured.css";
import useFetch from "../../hooks/useFetch";

// const Featured = (data) => {
const Featured = (db) => {
  const { data, isPending, error } = useFetch(
    "hotels/countByCity?cities=Barcelona,Madrid,Los Angeles"
  );

  // console.log(db);
  const arr = db.db;
  return (
    <div className="featured">
      {isPending ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <div className="featuredClass">
            <div className="featuredItem">
              <img src={arr[0].img} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Barcelona</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img src={arr[1].img} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img src={arr[2].img} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Los Angeles</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

//  {" "}
//       <div className="featuredClass">
//         <div className="featuredItem">
//           <img src={arr[0].img} alt="" className="featuredImg" />
//           <div className="featuredTitles">
//             <h1>{arr[0].title}</h1>
//             <h2>{arr[0]. properties}</h2>
//           </div>
//         </div>
