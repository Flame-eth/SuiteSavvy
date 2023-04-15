import React from "react";
import { featuredProperties } from "../../assets/featuredProperties";
import FeaturedPropertiesCard from "./FeaturedPropertiesCard";
import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";
import { BiHotel, BiLoaderCircle } from "react-icons/bi";
import { MdHotelClass } from "react-icons/md";

const FeaturedProperties = () => {
  const { data, isPending, error } = useFetch("hotels?featured=true");
  // console.log(data);
  return (
    <div className="fp">
      {isPending ? (
        <div className="loading">
          <BiLoaderCircle
            className="loadingIcon"
            size={"50px"}
            color="#003580"
          />
        </div>
      ) : (
        <div className="fp">
          {data.map((hotel) => (
            <div className="fpItem" key={hotel._id}>
              {hotel.photos[0] ? (
                <img src={hotel.photos[0]} alt="" className="fpImage" />
              ) : (
                <MdHotelClass color="gold" className="fpImage" />
              )}
              <span className="fpName">{hotel.name}</span>
              <span className="fpCity">{hotel.city} </span>
              <span className="fpPrice">
                {" "}
                Starting from ${hotel.cheapestPrice}{" "}
              </span>
              {hotel.rating && (
                <div className="fpRating">
                  <button>{hotel.rating} Rating </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
