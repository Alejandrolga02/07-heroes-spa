import { useReducer } from "react";
import PropTypes from "prop-types";

import { AuthContext, authReducer } from "./";

import { types } from "../types";

const init = () => {
	return {
		logged: false,
	};
};
export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {}, init);

	const login = (name) => {
		const action = {
			type: types.login,
			payload: {
				name,
			},
		};

		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{ 
			...authState, 

			// Methods
			login 
		}}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.object.isRequired,
};
