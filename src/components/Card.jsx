import React from "react";
import './Home.css';

const Card = ({image,title,onClick}) => {
  return (
    <div className="card" onClick={() => onClick(title)}>
      <img className="card-image" src={image} alt="card"/>
      <div className="card-container">
      <h3 className="name">{title}</h3>
      </div>
    </div>
  );
}
export default Card;
