import React from "react";
import "./FeaturedProperties.css";

const FeaturedPropertiesCard = (data) => {
  const prop = data.data;
  // let Rating;
  // prop.map(
  //   // (item) => {(if (item.rating > 4.5) {
  //   // Rating = "Very Good";
  //   // } else if (item.rating > 3.5) {
  //   // Rating = "Good";
  //   // } else if (item.rating > 2.5) {
  //   // Rating = "Average";
  //   // } else if (item.rating > 1.5) {
  //   // Rating = "Poor";
  //   // } else {
  //   // Rating = "Very Poor";
  //   // })}
  // );

  return (
    <div className="fp">
      {prop.map((item) => (
        <div className="fpItem">
          <img src={item.image} alt="" className="fpImage" />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city} </span>
          <span className="fpPrice"> Starting from ${item.price} </span>
          <div className="fpRating">
            <button>{item.rating} Rating </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPropertiesCard;
