import React from "react";
import "./Featured.css";

const Featured = (data) => {
  const arr = data.data;
  return (
    <div className="featured">
      <div className="featuredClass">
        <div className="featuredItem">
          <img src={arr[0].img} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>{arr[0].title}</h1>
            <h2>{arr[0].description}</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src={arr[1].img} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>{arr[1].title}</h1>
            <h2>{arr[1].description}</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src={arr[2].img} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>{arr[2].title}</h1>
            <h2>{arr[2].description}</h2>
          </div>
        </div>
      </div>
      <div className="featuredClass">
        <div className="featuredItem">
          <img src={arr[3].img} alt="" className="featuredImg" />
          <div className="featuredTitles lower">
            <h1>{arr[3].title}</h1>
            <h2>{arr[3].description}</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img src={arr[4].img} alt="" className="featuredImg" />
          <div className="featuredTitles lower">
            <h1>{arr[4].title}</h1>
            <h2>{arr[4].description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
