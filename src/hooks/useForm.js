import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useForm = (initialForm = {}) => {

	const [formState, setFormState] = useState(initialForm);
	const [, setSearchParams] = useSearchParams();

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value
		});
	}

	const onResetForm = ({target}) => {
		let resetedForm = {};
		for (const node of target.children) {
			if (formState[node.name] === node.value) {
				resetedForm = {
					...resetedForm,
					[node.name]: ''
				}
			}
		}

		setSearchParams('');
		setFormState({
			...resetedForm
		});
	}

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	}
}