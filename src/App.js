import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
//1. import create context from react
//import { createContext } from 'react';

//2. ComponentNameContext = createContext();
import {ProductContext, CartContext } from './contexts';

// const ProductContext = createContext();
// const CartContext = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//spread operator of state (cart), add item(variable of what is being passed in < functionName = variableBeingPassedIn => { >)
		setCart([...cart, item]);
	};

	return (
		<div className="App">
	<ProductContext.Provider value={{ products, addItem }}>
	<CartContext.Provider value={{cart}}>
			{/* //CartContext.Provider is wrapped around Navigation and ShoppingCart */}
		
			<Navigation />
			

			{/* Routes */}
			<Route exact path="/">

				{/* //3. wrap Component with ComponentNameContext.Provider with values = to whatever is being passed */}
					{/* //Passing values in Provider context */}
					{/* //can remove values being passed from component */}
				<Products />
				
				{/* //Don't forget to close ComponentNameContext.Provider */}
				
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>

			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
