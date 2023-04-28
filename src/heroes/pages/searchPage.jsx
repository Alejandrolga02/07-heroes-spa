import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";


export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);
	const heroes = getHeroByName(q);

	const {searchText, onInputChange, onResetForm} = useForm({
		searchText: q
	})

	const onSearchSubmit = (event) => {
		event.preventDefault();

		if (searchText.trim().length < 3) return;

		navigate(`?q=${searchText.toLowerCase().trim()}`);
	}

	return (
		<>
			<h1>Search Heroes</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input type="text" name="searchText" value={searchText} onChange={onInputChange} className="form-control" autoComplete="off" />
						<button type="submit" className="btn btn-dark mt-2 me-4">Search</button>
						<button onClick={onResetForm} className="btn btn-warning mt-2">Reset</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					<div className="alert alert-primary">Search a hero</div>
					<div className="alert alert-danger">There is no results <b>{ q }</b></div>

					{
						heroes.map((hero) => {
							return <HeroCard key={hero.id} {...hero} />
						})
					}
				</div>
			</div>
		</>
	);
};
