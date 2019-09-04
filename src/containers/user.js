import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import UserInfo from "../components/userInfo";
import UserOrders from "../components/userOrders";

import { getUserOrders, getOrders } from "../actions/orders";
import { changeInputValueUserUserForm } from "../actions/auth";
import { putUser } from "../actions/user";

class UserContainer extends Component {
  componentDidMount() {
    this.props.getOrders({
      doctors: this.props.doctors,
      services: this.props.services,
      users: this.props.users
    });
  }
  // componentDidUpdate(){
  //     if(this.props.orders.length > 0 &&)
  //     // console.log('did update', this.props.orders)
  //      this.props.getUserOrders(this.props.currentUser)
  // }
  componentDidUpdate(prevProps) {
    if (this.props.orders.length > 0)
      if (prevProps.orders !== this.props.orders)
        this.props.getUserOrders(this.props.currentUser);
  }

  render() {
    const {
      currentUser,
      changeUserUserForm,
      changeInputValueUserUserForm,
      putUser,
      userOrdersArray
    } = this.props;
    return (
      <div className="main">
        <div className="info-wrap">
          <h2>Добро пожаловать в личный кабинет, {currentUser.firstName}!</h2>
          <div className="btn-box user-btn-box">
            <Link to="/user/orders" className="btn link admin user-link">
              Мои заказы
            </Link>
            <Link to="/user/info" className="btn link admin  user-link">
              Редактировать профиль
            </Link>
          </div>
          <Switch>
            <Route
              path="/user/orders"
              render={() => <UserOrders data={userOrdersArray} />}
            />
            <Route
              path="/user/info"
              render={() => (
                <UserInfo
                  user={currentUser}
                  changeUserUserForm={changeUserUserForm}
                  changeInputValueUserUserForm={changeInputValueUserUserForm}
                  putUser={putUser}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.user,
    changeUserUserForm: state.auth.changeUserForm,
    orders: state.orders.orders,
    users: state.user.users,
    services: state.services.services,
    doctors: state.app.doctors,
    userOrdersArray: state.orders.userOrdersArray
  };
};
export default connect(
  mapStateToProps,
  { changeInputValueUserUserForm, putUser, getOrders, getUserOrders }
)(UserContainer);
