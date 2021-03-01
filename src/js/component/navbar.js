import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
export const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { store, actions } = useContext(Context);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qr33rQC9pzK1_xZCRBWiWkNUxiMdKk-iOQ&usqp=CAU"
						alt="Trulli"
						width="200"
					/>
				</span>
			</Link>
			<div className="mr-5">
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle caret>Dropdown</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header> Favoritos</DropdownItem>
						<DropdownItem>Personajes Favoritos</DropdownItem>
						{store.favorites.map((favorite, i) => {
							if (favorite.type == "persona") {
								return (
									<div key={i}>
										<DropdownItem text>{favorite.name}</DropdownItem>
									</div>
								);
							}
						})}
						<DropdownItem>Planetas Favoritos</DropdownItem>
						{store.favorites.map((favorite, i) => {
							if (favorite.type == "planetas") {
								return (
									<div key={i}>
										<DropdownItem text>{favorite.name}</DropdownItem>
									</div>
								);
							}
						})}
					</DropdownMenu>
				</Dropdown>
			</div>
		</nav>
	);
};
