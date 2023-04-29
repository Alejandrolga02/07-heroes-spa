import { useContext } from "react";
import PropTypes from 'prop-types'

import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const { logged: isLogged } = useContext(AuthContext);

	return (isLogged) 
		? children 
		: <Navigate to="/login" />
};

PrivateRoute.propTypes = {
	children: PropTypes.object.isRequired
}