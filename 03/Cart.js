import React from 'react';
import Product from './Product';

function Cart(props) {
    const { data, btnFunc } = props
    const list = data.map(item => { 
        const dataPack = { item, btnFunc }
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