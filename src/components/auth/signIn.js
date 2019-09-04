import React from "react";

import { useForm } from "../hooks/useForm";
import Input from "../input";

import Button from "../buttons/button";
import { logInForm } from "../../utils/formFields";

export const SignInForm = ({ error, submitHandler }) => {
	const [form, { onChangeHandler, returnAllValues, focusEvent, blurEvent }] = useForm(logInForm);

	const submit = e => {
		e.preventDefault();
		const values = returnAllValues();

		submitHandler(values);
	};

	return (
		<div className="auth__auth-box">
			<form onSubmit={submit} className="auth__auth-form">
				{Object.keys(form.form).map(input_name => {
					return (
						<Input
							key={form.form[input_name].id}
							id={form.form[input_name].id}
							value={form.form[input_name].value}
							name={form.form[input_name].name}
							type={form.form[input_name].type}
							fail={form.form[input_name].fail}
							touch={form.form[input_name].touch}
							label={form.form[input_name].label}
							onChange={onChangeHandler}
							onFocus={focusEvent}
							onBlur={blurEvent}
							autoComplete="off"
						/>
					);
				})}
				{error && <p className="auth__error-auth-text">{error}</p>}
				<div className="auth__control-box">
					<Button disabled={!form.validForm} className="auth__submit-btn" type="submit" text="Войти" />
				</div>
			</form>
		</div>
	);
};
