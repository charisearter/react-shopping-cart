import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
//1. import create context from react
import { createContext } from 'react';

//2. ComponentNameContext = createContext();
const ProductContext = createContext();
const CartContext = createContext();

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

			{/* //CartContext.Provider is wrapped around Navigation and ShoppingCart */}
			<CartContext.Provider value={{cart}}>
			<Navigation />
			</CartContext.Provider>

			{/* Routes */}
			<Route exact path="/">

				{/* //3. wrap Component with ComponentNameContext.Provider with values = to whatever is being passed */}
					{/* //Passing values in Provider context */}

				<ProductContext.Provider value={{ products, addItem }}>
					
					{/* //can remove values being passed from component */}
				<Products />
				
				{/* //Don't forget to close ComponentNameContext.Provider */}
				</ProductContext.Provider>
			</Route>

			<Route path="/cart">
				<CartContext.Provider value={{cart}}>
				<ShoppingCart />
				</CartContext.Provider>
			</Route>
		</div>
	);
}

export default App;
