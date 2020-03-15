import React, { Component } from "react";
import DetailsModel from "./detailsModel";

class ItemCard extends Component {
  render() {
    const { id, title, thumbnail } = this.props;

    return (
      <div id={ id } className="item">
        <img className="image" src={thumbnail}></img>
        <h3 className="title">{title}</h3>
      </div>
    );
  }
}

export default ItemCard;