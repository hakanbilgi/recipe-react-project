import React from "react";
import { useLocation } from "react-router-dom";

const Details = ({ detailData }) => {
  const { state: food } = useLocation();
  console.log("state", food);
  // console.log("Detailsdata", detailData);
  return <div>Details</div>;
};

export default Details;
