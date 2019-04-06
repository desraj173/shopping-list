import React, { Component } from "react";

export class ShoppingItem extends Component {
  state = {
    item: this.props.item
  };
  render() {
    const { item } = this.state;
    return (
      <React.Fragment>
        <div key={item.id}>{item.name}</div>
      </React.Fragment>
    );
  }
}

export default ShoppingItem;
