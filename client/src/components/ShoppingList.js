import React, { Component } from 'react';
import axios from 'axios';

export class ShoppingList extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`api/items/`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => <li> {item.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default ShoppingList
