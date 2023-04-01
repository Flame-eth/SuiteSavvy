import React from "react";
import "./PropertyList.css";

const PropertyList = (props) => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img className="pListImg" src={props.img} alt="" />
        <div className="pListTitles">
          <h1>{props.title}</h1>
          <h2>{props.quantity}</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
