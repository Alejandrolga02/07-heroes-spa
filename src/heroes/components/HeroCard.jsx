import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharactersByHero = ({characters, alter_ego}) => {
	if (characters === alter_ego) {
		return (<></>);
	}

	return <p>{characters}</p>;
}

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
	const heroImageUrl = `/assets/heroes/${id}.jpg`;

	return (
		<div className="col animate__animated animate__fadeIn">
			<div className="card">
				<div className="row g-0">
					<div className="col-4">
						<img src={heroImageUrl} className="card-img" alt={superhero} />
					</div>
					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							<CharactersByHero alter_ego={alter_ego} characters={characters} />
							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>
							<Link to={`/hero/${id}`}>
								More Info...
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HeroCard.propTypes = {
	id: PropTypes.string.isRequired,
	superhero: PropTypes.string.isRequired,
	alter_ego: PropTypes.string.isRequired,
	first_appearance: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};

CharactersByHero.propTypes = {
	characters: PropTypes.string.isRequired,
	alter_ego: PropTypes.string.isRequired
}