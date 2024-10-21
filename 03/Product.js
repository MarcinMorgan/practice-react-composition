import React from 'react';

function Product(props) {
    const { item, btnFunc, btnContent, index } = props
    console.log(props)
    
    const clickHandler = () => {
        if (btnContent.includes('Dodaj')) {
            btnFunc(item);
        }
        else {
            btnFunc(index);
        }
    }

    return <tr>
        <th>{ item.name }</th>
        <th>{ item.price } PLN</th>
        <th><button onClick={ clickHandler }>{ btnContent }</button></th>
    </tr>
}

export default Product;