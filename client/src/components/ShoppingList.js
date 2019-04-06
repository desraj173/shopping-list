import React, { Component } from "react";
import axios from "axios";
import ShoppingItem from "./ShoppingItem";

export class ShoppingList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get(`api/items/`)
      .then(res => {
        let items = res.data;
        this.setState({ items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ul>
          {items.map(item => (
            <ShoppingItem item={item} key={item._id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
