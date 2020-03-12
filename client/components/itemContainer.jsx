import React, { PureComponent } from "react";
import ItemCard from "./itemCard";

class ItemContainer extends PureComponent {
  render() {
    const { items, type } = this.props;

    const itemChars = items.map(({title, thumbnail}, i) => {
      return <ItemCard key={i} title={title} thumbnail={thumbnail}/>;
    });

    console.log(itemChars);

    if (!items.length) {
      return (
        <div>
          <h1>No {type}</h1>
        </div>
      );
    }

    return (
        <div className='itemContainer'>
            { itemChars }
        </div>  
        );
  }
}

export default ItemContainer;
