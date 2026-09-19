import React from "react";
import FoodCard from "../components/FoodCard";

const MenuPage = async () => {
  const response = await fetch(
    " https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const foodData = await response.json();
  const foods = foodData.data;

//   console.log("Menu Page Foods: ", foods);

  return (
    <div>
      <h2>Menu Page</h2>
      <div className="grid grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
