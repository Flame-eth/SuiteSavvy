import React from "react";
import "./PropertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = (props) => {
  const { data, isPending, error } = useFetch("hotels/countByType");
  console.log(data);
  return (
    <div className="pList">
      {isPending ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <div className="pListItem">
            <img className="pListImg" src={props.img} alt="" />
            <div className="pListTitles">
              <h1>{props.title}</h1>
              <h2>{props.quantity}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;
