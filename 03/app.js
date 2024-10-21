import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = (newItem) => {
        this.setState({
            cart: [...this.state.cart, newItem]
        })
    }
    
    removeProduct = (index) => {
        const newList = [...this.state.cart.slice(0,index), ...this.state.cart.slice(index+1)]
        this.setState( {
            cart: [...newList]
        }
        )
    }
    
    render() {
        const categoryProps = { data: data, btnFunc: this.addProduct, btnContent: 'Dodaj do koszyka' }
        const cartProps = { data: this.state.cart, btnFunc: this.removeProduct, btnContent: 'Usuń z koszyka' }
        return (
            <section>
                <Category { ...categoryProps }/>
                <Cart { ...cartProps }/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
