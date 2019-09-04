import React from "react";

import { signUpForm } from "../../utils/formFields";
import { useForm } from "../hooks/useForm";

import Input from "../input";
import Button from "../buttons/button";

export const SignUpForm = ({ submitHandler, error, successRegister }) => {
	const [form, { onChangeHandler, returnAllValues, focusEvent, blurEvent }] = useForm(signUpForm);

	const submit = e => {
		e.preventDefault();
		const values = returnAllValues();

		submitHandler(values);
	};

	return (
		<div>
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
				{successRegister && <p className="auth__success-auth-text">{successRegister}</p>}
				{error && <p className="auth__error-auth-text">{error}</p>}
				<div className="auth__control-box">
					<Button disabled={!form.validForm} className="auth__submit-btn" type="submit" text="Зарегистрироваться" />
				</div>
			</form>
		</div>
	);
};
