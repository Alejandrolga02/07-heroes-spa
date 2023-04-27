import PropTypes from "prop-types";

import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {

	const heroes = getHeroesByPublisher(publisher);

	return (
		<>
			<ul>
			{heroes.map((heroe) => {
				return <li key={heroe.id} >{heroe.superhero}</li>
			})}
			</ul>
		</>
	);
};
HeroList.propTypes = {
	publisher: PropTypes.string.isRequired,
};
