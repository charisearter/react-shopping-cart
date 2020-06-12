import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//7. import useContext and CartContext

import { CartContext } from '../contexts'

export default function Navigation() {
	//destructure and remove props
	const { cart } = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

//export default Navigation;
