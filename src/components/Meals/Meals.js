import React from "react";
import { AvailableMeals } from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export const Meals = () => {
  console.log("Meals");
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
