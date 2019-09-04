import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { userLogout} from "../../actions/auth"

class Header extends Component {
	state = {
		
	}

	logoutHandler  = (e) => {
		localStorage.removeItem('userId')
		this.props.userLogout();
		this.props.history.push('/')
	};

	render(){
	const { user } = this.props;
	const liArr = [
		{ path: "/", id: 1, text: "Главная", hideWhenAuth:false},
		{ path: "/doctors",  id: 2,  text: "Специалисты", hideWhenAuth:false },
		{ path: "/services", id: 3,  text: "Услуги", hideWhenAuth:false},
		{ path: "/reviews", id: 4, text: "Отзывы", hideWhenAuth:false },
		{ path: "/auth", id: 5, text: "Войти", hideWhenAuth:true
		}
	];

	return (
		<nav className=" nav icon-dehaze"
			// onClick = { ( ) => { document.querySelector('.list').style.display = " block"    }  }
		>
			<ul className=" list ">
			{liArr.map(el =>
				el.hideWhenAuth && user ? null :
					(
						<li className="item" key={el.id}>
							<Link to={el.path}>{el.text}</Link>
						</li>
					)
			)}
			{Object.keys(user).length > 0 ?
				user.role ?
						(<li className="item" key={6}>
							<Link to={ "/admin"}>{"Admin"} <span  className="icon-exit" onClick={this.logoutHandler}></span></Link>
						</li>) :
				user.doctor ?
					(<li className="item" key={6}>
						<Link to={ "/doctor"}>{"Reviews"}<span  className="icon-exit" onClick={this.logoutHandler}></span></Link>
					</li>) :
					(<li className="item" key={6}>
						<Link to={ "/user"}>{user.firstName}<span  className="icon-exit" onClick={this.logoutHandler}></span></Link>
					</li>) :	<li className="item" key={5}>
										<Link to={"/auth"}>Войти</Link>
									</li>
			}
			</ul>
		</nav>
	)
	}
}

const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps,{userLogout})(withRouter(Header));