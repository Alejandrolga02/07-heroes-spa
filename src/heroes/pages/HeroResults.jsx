import PropTypes from "prop-types";
import { HeroCard } from "../components";

export const HeroResults = ({ heroes, query }) => {
	if (query === "") {
		return <div className="alert alert-primary">Search a hero</div>;
	}

	if (heroes.length === 0) {
		return (
			<div className="alert alert-danger">
				There is no results <b>{query}</b>
			</div>
		);
	}

	return heroes.map((hero) => {
		return <HeroCard key={hero.id} {...hero} />;
	});
};

HeroResults.propTypes = {
	heroes: PropTypes.array.isRequired,
	query: PropTypes.string.isRequired,
};
