import React, { useContext } from "react";
import "./card.css";
import { Cardimg } from "../../Pages/HomePage/HomePage";

function Card() {
  const x = useContext(Cardimg);

  return (
    <div className="singlecard">
      <img
        src={`https://randomuser.me/api/portraits/men/${x.i + 19}.jpg`}
        alt="pic"
      />
      <div>{x.e.name}</div>
      <div>{x.e.email}</div>
    </div>
  );
}

export default Card;
