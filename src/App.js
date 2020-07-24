 import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./app/LoginForm";
import Card from "./components/Card";
import CardData from "./components/CardData"

console.log(CardData[2].name);

function App() {
  return (
    <>
      <div className="main">
        <Card
          imgsrc={CardData[0].imgsrc}
          title={CardData[0].title}
          name={CardData[0].name}
          link={CardData[0].link}
        />
        <Card
          imgsrc={CardData[1].imgsrc}
          title={CardData[1].title}
          name={CardData[1].name}
          link={CardData[1].link}
        />
        <Card
          imgsrc={CardData[2].imgsrc}
          title={CardData[2].title}
          name={CardData[2].name}
          link={CardData[2].link}
        />
       <Card
          imgsrc={CardData[3].imgsrc}
          title={CardData[3].title}
          name={CardData[3].name}
          link={CardData[3].link}
        />
      </div>
    </>
  );
}

export default App;
