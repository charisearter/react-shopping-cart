import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

//6. import  useContext and CartContext
import { CartContext } from '../contexts';

//change to export default function NAME() {//whatever}
//make sure to remove the export line below the function
export default function ShoppingCart() {

	//deconstruct value and remove props fro getCart total and map
	const { cart }= useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

//export default ShoppingCart;
