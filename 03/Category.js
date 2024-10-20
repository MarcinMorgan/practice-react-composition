import React from 'react';
import Product from './Product';

function Category(props) {
    const { data } = props
    const list = data.map(item => <Product item = { item }></Product>)
    
    return <h2>Category
        { list }
    </h2>
}

export default Category;