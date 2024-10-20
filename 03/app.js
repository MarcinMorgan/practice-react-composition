import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = () => {

    }

    removeProduct = () => {
        
    }
    
    render() {
        return (
            <section>
                <Category data = { data }/>
                <Cart data = { this.state.cart }/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
