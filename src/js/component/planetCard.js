import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const PlanetCard = props => {
	return (
		<div className="col-md-3" style={{ width: "18rem", float: "left" }}>
			<div className="card mb-2">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMTnike4YPbUSuRS-SWduDmjhkbBCE2y0Ag&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.textGender}</p>
					<p className="card-text">{props.textEyeC}</p>
					<p className="card-text">{props.textHairC}</p>

					<Link to="singleProper">
						<p className="btn btn-primary"> More inf</p>
					</Link>
					<Link onClick={() => actions.addFavorite(props.title, "persona")}>
						<button type="button" className="btn btn-outline-warning">
							<i className="far fa-heart" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	title: PropTypes.object,
	textGender: PropTypes.object,
	textEyeC: PropTypes.object,
	textHairC: PropTypes.object
};
