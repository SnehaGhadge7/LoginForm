import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./app/LoginForm";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="main">
        <Card
          imgsrc="https://wallpapercave.com/wp/wc1813154.jpg"
          title="Appetizers"
          name="Pizza"
          link="https://www.simplyrecipes.com/recipes/homemade_pizza/"
        />
        <Card
          imgsrc="https://wallpapercave.com/wp/wp3151338.jpg"
          title="Appetizers"
          name="Burger"
          link="https://www.indianhealthyrecipes.com/veg-burger-recipe-veggie-burger-recipe/"
        />
        <Card
          imgsrc="https://wallpapercave.com/wp/wp4392659.jpg"
          title="Appetizers"
          name="French Fries"
          link="https://thecozycook.com/homemade-french-fries/"
        />
        <Card
          imgsrc="https://wallpapercave.com/wp/wp4914630.jpg"
          title="Appetizers"
          name="Manchurian"
          link="https://www.vegrecipesofindia.com/veg-manchurian-veg-manchurian-gravy/"
        />
      </div>
    </>
  );
}

export default App;
