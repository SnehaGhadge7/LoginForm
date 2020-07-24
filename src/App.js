import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./app/LoginForm";
import Card from "./components/Card";
import CardData from "./components/CardData";

const mCard = (val) => {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      name={val.name}
      link={val.link}
    />
  );
}

function App() {
  return (
    <>
      <div className="main">
        {CardData.map(mCard)}
        </div>
    </>
  );
}

export default App;
