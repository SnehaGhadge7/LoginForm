import React from "react";
import "../App.css";

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="cards"> 
        <div className="card">
          <img src={props.imgsrc} alt=" " />
        </div>
        <div className="card_info">
          <span className="cardtitle">{props.title}</span>
          <h3>{props.name}</h3>
          <a href={props.link} target="_blank">
            <button>Open Recipe</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
