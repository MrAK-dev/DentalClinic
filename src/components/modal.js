import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class Modal extends Component {
	modal = React.createRef();

	componentWillMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside = event => {
		if (!this.props.open) return;

		if (this.modal.current && !this.modal.current.contains(event.target)) {
			this.props.close();
		}
	};

	render() {
		const { children, open } = this.props;
		return open
			? ReactDOM.createPortal(
					<div className="modal-wrapper">
						<div className="modal" ref={this.modal}>
							{children}
						</div>
					</div>,
					document.body
			  )
			: null;
	}
}