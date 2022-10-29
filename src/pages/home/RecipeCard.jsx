import React, { useState } from "react";
import Details from "../details/Details";

import CardStyle, { Button, CardImg, Cards, CardTitle } from "./Home.styled";

const RecipeCard = ({ data }) => {
  const [detailData, setDetailData] = useState();
  // console.log("recipedata:", data);

  const dataDetail = (e) => {
    setDetailData(data[e.target.id]);
    // console.log("index:", e.target.id);
  };
  // console.log("DetailData", detailData);
  return (
    <>
      <Cards>
        {data.map((item, index) => {
          const { recipe } = item;
          return (
            <CardStyle key={index}>
              <CardTitle>{recipe.label}</CardTitle>
              <div>
                <CardImg src={recipe.image} alt="" />
              </div>

              <Button id={index} onClick={dataDetail}>
                View More
              </Button>
            </CardStyle>
          );
        })}
      </Cards>
      <Details detailData={detailData} />
    </>
  );
};

export default RecipeCard;
