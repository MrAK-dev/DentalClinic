import { useState } from "react";

export const useForm = initialValues => {
	const [form, setFormProp] = useState(initialValues);

	const validator = (rules, value, allForm) => {
		const valid = Object.keys(rules).reduce((prev, elem) => {
			if (prev) return true
			const check = rules[elem].cb(value, allForm[rules[elem].match])
			if (!prev && check) return check

			return false
		}, false)

		return valid;
	};

	const onChangeHandler = e => {
		const { name, value } = e.target;

		setFormProp(prevState => {
			const values = Object.keys(prevState.form).reduce((prev, elem) => {
				if (elem === name) return prev.concat(value);
				return prev.concat(prevState.form[elem].value);
			}, []);

			return {
				...prevState,
				form: {
					...prevState.form,
					[name]: {
						...prevState.form[name],
						value
					}
				},
				validForm: values.some(value => value)
			};
		});
	};

	const focusEvent = e => {
		const { name } = e.target;

		setFormProp(prevState => ({
			...prevState,
			form: {
				...prevState.form,
				[name]: {
					...prevState.form[name],
					touch: true
				}
			}
		}));
	};

	const blurEvent = e => {
		const { name, value } = e.target;

		const prevValues = Object.keys(form.form).reduce((prev, elem) => {
			return { ...prev, [elem]: elem === name ? value : form.form[elem].value };
		}, {});

		setFormProp(prevState => {
			const valid = validator(prevState.form[name].validation, value, prevValues);
			return {
				...prevState,
				form: {
					...prevState.form,
					[name]: {
						...prevState.form[name],
						fail: value ? valid : true
					}
				}
			};
		});
	};

	const returnAllValues = () => {
		return Object.keys(form.form).reduce((prev, elem) => {
			return { ...prev, [elem]: form.form[elem].value };
		}, {});
	};

	return [form, { onChangeHandler, returnAllValues, focusEvent, blurEvent }];
};