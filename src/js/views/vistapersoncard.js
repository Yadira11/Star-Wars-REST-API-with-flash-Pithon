import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const Vistapersoncard = props => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">
					<strong>{NombrePersonaje}</strong>
				</h1>
				<div className="row">
					<img src="" alt="Trulli" width="400" />
				</div>
				<hr className="card-body bg-dark" />
				<h5 className="card-title text-white">
					<strong>{nombre}</strong>
				</h5>
				<p className="card-text text-white">
					<strong>Title: &nbsp;</strong>
					Titulo
					<br />
					<strong>Gender</strong>
					Genero
					<br />
					<strong>Height: &nbsp;</strong>
					altura
					<br />
					<strong>Mass: &nbsp;</strong>
					Masa
				</p>
			</div>
		</div>
	);
};
