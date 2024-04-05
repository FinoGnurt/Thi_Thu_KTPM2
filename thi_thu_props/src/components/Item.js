import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="bg_items">
      <div className="items">
        <img className="image" src={props.img}></img>
        <div className="contents">
          <p className="title">{props.title}</p>
          <p className="price">{props.price}₫</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
