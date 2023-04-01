import React from "react";
import { featuredProperties } from "../../assets/featuredProperties";
import FeaturedPropertiesCard from "./FeaturedPropertiesCard";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <FeaturedPropertiesCard data={featuredProperties} />
    </div>
  );
};

export default FeaturedProperties;
