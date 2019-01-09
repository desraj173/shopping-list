import React, { Component } from 'react';
import axios from 'axios';

export class ShoppingList extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`api/items/`)
            .then(res => {
                let items = res.data;
                this.setState({ items });
            })
            .catch(err => { console.log(err) })
    }

    render() {
        const { items } = this.state;
        return (

            <div>

                <ul>
                    {items.map(item => <li key={item._id}> {item.name}</li>)}
                </ul>
            </div >
        )
    }
}

export default ShoppingList
