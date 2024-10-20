import React from 'react';
import Product from './Product';

function Cart(props) {
    const { data } = props
    const list = data.map(item => <Product item = { item }></Product>)
    
    return <h2>Cart
        { list }
    </h2>
}

export default Cart;