import React from 'react';

function Product(props) {
    const { item } = props
    return <tr>
        <th>{ item.name }</th>
        <th>{ item.price } PLN</th>
        <th>{ item.quantity }</th>
    </tr>
}

export default Product;