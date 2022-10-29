import React from "react";

import CardStyle, { Button, CardImg, Cards, CardTitle } from "./Home.styled";

const RecipeCard = ({ data }) => {
  console.log("recipedata:", data);
  return (
    <Cards>
      {data.map((item, index) => {
        const { recipe } = item;
        return (
          <CardStyle key={index}>
            <CardTitle>{recipe.label}</CardTitle>
            <div>
              <CardImg src={recipe.image} alt="" />
            </div>

            <Button>View More</Button>
          </CardStyle>
        );
      })}
    </Cards>
  );
};

export default RecipeCard;
