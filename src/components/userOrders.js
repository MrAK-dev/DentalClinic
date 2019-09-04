import React, { Component } from "react";

class UserOrders extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="user-orders">
        {data.map(el => (
          //   console.log(el)
          <div key={el._id} className="user-orders__content">
            <h4 className="user-orders__heading">Процедура: {el.spec.name}</h4>
            <p className="user-orders__paragraph">
              Дата записи: {el.date.split("T")[0]}
            </p>
            <p className="user-orders__paragraph"> Время записи: {el.time}</p>
            <p className="user-orders__paragraph">Доктор: {el.doctor.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserOrders;
