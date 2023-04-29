import { useContext } from "react";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
	const { logged: isLogged } = useContext(AuthContext);

	const { pathname, search } = useLocation();
	const lastPath = pathname + search;
	localStorage.setItem('lastPath', lastPath);

	return (isLogged) 
		? children 
		: <Navigate to="/login" />
};

PrivateRoute.propTypes = {
	children: PropTypes.object.isRequired
}