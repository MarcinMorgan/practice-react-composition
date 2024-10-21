import React from 'react';
import Product from './Product';

function Category(props) {
    const { data, btnFunc, btnContent } = props
    const list = data.map(item => { 
        const dataPack = { item, btnFunc, btnContent }
        return( <Product { ...dataPack }></Product> )
    })
    
    return <h2>Category
        <table>
            <tbody>
                { list }
            </tbody>
        </table>
    </h2>
}

export default Category;