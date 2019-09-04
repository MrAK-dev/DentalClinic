import React from "react";






export const CustomSelect = ({ label, options , emptyLine, searchInput = true,  reset, clickOptionEvent = () =>{} }) => {

	const [copyOption, setCopyOption] = React.useState([]);
	const [show, toggleShow] = React.useState(false);
	const [value, toggleValue] = React.useState("");
	const [inputValue, toggleInputValue] = React.useState("");
	const list = React.createRef();



	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutSide);
		return () => document.removeEventListener("mousedown", handleClickOutSide);
	});

	React.useEffect(() => {
		if (reset) {
			toggleValue("");
			toggleInputValue("");
			setCopyOption(options);

			toggleShow(false);
		}
	}, [options, reset]);

	React.useEffect(() => {
		setCopyOption(options);
	}, [options]);

	const handleClickOutSide = e => {
		if (!show) return;

		if (list.current && !list.current.contains(e.target)) {
			toggleShow(false);
		}
	};

	const toggleEvent = text => {
		if (typeof clickOptionEvent === "function" ) clickOptionEvent(text);
		toggleValue(text);
		toggleInputValue(text);
		toggleShow(false);
	};

	const clickOnEptyLine = (text) => {
		if (typeof clickOptionEvent === "function" ) clickOptionEvent(text);
		toggleValue("");
		toggleInputValue("");

		toggleShow(false);
	};

	const chahgeValueEvent = e => {
		const { value } = e.target;
		toggleInputValue(e.target.value);

		if (!value) {
			setCopyOption(options);
			toggleInputValue(value);
		} else {
			const filtered = copyOption.filter(el => el.name.toLowerCase().indexOf(value.toLowerCase()) >= 0);

			setCopyOption(filtered);
			toggleInputValue(value);
		}
	};

	return (
		<div className="select ">
			{label && (
				<label htmlFor="select" className="select__lable">
					{label}
				</label>
			)}
			<div className="select__value-box" onClick={() => toggleShow(true)}>
				{searchInput ? null : <span>{value} &nbsp;</span>}
				<input
					value={inputValue}
					autoComplete="off"
					type={searchInput ? "text" : "hidden"}
					readOnly="readonly"
					onChange={chahgeValueEvent}
					id="select"
					className="select__input  icon-angle-down"
				/>
				<span className="icon-angle-down"></span>
			</div>
			{show && (
				<ul className="select__list " ref={list}>
					<div className="scrollbar" id ="style">
							<div className="force-overflow"></div>
						
						{emptyLine && (
							<li className="select__item" onClick={clickOnEptyLine}>
								Выбрать 
							</li>
						)}
						{copyOption.map(el => (
							<li className="select__item" key={el._id} onClick={toggleEvent.bind(null, el.name)}>
								{el.name}
							</li>
						))}
					</div>
				</ul>
			)}
		</div>
	);
};