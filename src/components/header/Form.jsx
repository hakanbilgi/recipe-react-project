import React, { useState } from "react";
import { Button, FormStyle, Input, Options, Select } from "./Header.styled";
import axios from "axios";
import RecipeCard from "../../pages/home/RecipeCard";

const Form = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [data, setData] = useState([]);
  console.log("query:", query);
  console.log("meal:", meal);
  console.log("data", data);

  const getFood = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=e4a5311d&app_key=ccf27b5d9c2b76b9e771157bde8315d5&mealType=${meal}`;
    try {
      const { data } = await axios(url);
      setData(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  // const getFood = async () => {
  //   const url = `https://api.edamam.com/search?q=${query}&app_id=e4a5311d&app_key=ccf27b5d9c2b76b9e771157bde8315d5&mealType=${meal}`;

  //   try {
  //     fetch(url)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Something went wrong");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => setData(data.hits));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <FormStyle>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={() => getFood()}>Search</Button>
        <Select name="aa" id="" onChange={(e) => setMeal(e.target.value)}>
          <Options value="" selected disabled>
            Select
          </Options>
          <Options value="breakfast">Breakfast</Options>
          <Options value="lunch">Lunch</Options>
          <Options value="dinner">Dinner</Options>
          <Options value="snack">Snack</Options>
          <Options value="teatime">Teatime</Options>
        </Select>
      </FormStyle>
      <RecipeCard data={data} />
    </>
  );
};

export default Form;
