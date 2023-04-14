import React from "react";
import { featuredProperties } from "../../assets/featuredProperties";
import FeaturedPropertiesCard from "./FeaturedPropertiesCard";
import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, isPending, error } = useFetch("hotels/countByType");
  return (
    <div className="fp">
      <FeaturedPropertiesCard data={featuredProperties} />
    </div>
  );
};

export default FeaturedProperties;
