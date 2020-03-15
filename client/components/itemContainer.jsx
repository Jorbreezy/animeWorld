import React, { PureComponent } from "react";
import ItemCard from "./itemCard";
import DetailsModel from "./detailsModel";

class ItemContainer extends PureComponent {
  render() {
    const { items, type } = this.props;

    const itemChars = items.map(({ title, thumbnail, id }, i) => {
      return (
        <ItemCard
          type={type}
          key={i}
          id = { id }
          title={title}
          thumbnail={ thumbnail }
          click={ this.openModalHandler }
          close={ this.closeModalHandler }
        />
      );
    });

    if (!items.length) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>No Search Results for {type}...</h1>
        </div>
      );
    }

    return(
      <div className="itemContainer">
        { itemChars }
      </div>
    ) 
   
  }
}

export default ItemContainer;
