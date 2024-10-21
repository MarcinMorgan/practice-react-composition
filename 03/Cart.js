import React from 'react';
import Product from './Product';

function Cart(props) {
    const { data, btnFunc, btnContent } = props
    const list = data.map((item, index) => { 
        const dataPack = { item, btnFunc, btnContent, index }
        return( <Product { ...dataPack }></Product> )
    })

    return <h2>Cart
        <table>
            <tbody>
                { list }
            </tbody>
        </table>
    </h2>
}

export default Cart;