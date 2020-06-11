import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context

import { createContext } from 'react';

const ProductContext = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//spread operator of state (cart), add item(variable of what is being passed in)
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
					{/* //Passing values in Provider context */}
				<ProductContext.Provider value={{ products, addItem }}>
					{/* //can remove from component */}
				<Products />
				</ProductContext.Provider>
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
