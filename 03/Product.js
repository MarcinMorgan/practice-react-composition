import React from 'react';

function Product(props) {
    const { item, btnFunc, btnContent } = props
    console.log(props)
    
    const clickHandler = () => {
        btnFunc(item)
    }

    return <tr>
        <th>{ item.name }</th>
        <th>{ item.price } PLN</th>
        <th><button onClick={ clickHandler }>{ btnContent }</button></th>
    </tr>
}

export default Product;