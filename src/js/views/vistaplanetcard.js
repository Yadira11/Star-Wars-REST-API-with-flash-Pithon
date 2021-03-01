import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const Vistaplanetcard = props => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">
					<strong>{NombrePlanetas}</strong>
				</h1>
				<div className="row">
					<img src="" alt="Trulli" width="400" />
				</div>
				<hr className="card-body bg-dark" />
				<h5 className="card-title text-white">
					<strong>{nombre}</strong>
				</h5>
				<p className="card-text text-white">
					<strong>title: &nbsp;</strong>
					title
					<br />
					<strong>population</strong>
					population
					<br />
					<strong>climate: &nbsp;</strong>
					climate
					<br />
					<strong>gravity: &nbsp;</strong>
					gravity
				</p>
			</div>
		</div>
	);
};





