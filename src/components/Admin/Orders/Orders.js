import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ChangeOrder from "./ChangeOrder";

class Orders extends Component {
    state={
        order:null,
    };

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.users.length > 0 && this.props.orders.length === 0)
            this.props.getOrders({doctors:this.props.doctors,services:this.props.services,users:this.props.users});
    }

    changeInputFindOrder = (e) => {
        this.props.changeInputFindOrder(e.target.value)
    };

    findOrders = () => {
        this.props.findOrdersArray()
    };

    enterPressed = (e) => {
        if (e.key === 'Enter') {
            this.findOrders();
        }
    };

    emailPressed = (e) => {
        this.props.changeInputFindOrder(e.target.innerText);
        this.findOrders()
    };

    changeOrder = (e) => {
        this.setState({
            order:!this.state.order ? this.props.orders.find(el => el._id === e.target.id) : null
        })
    };

    render() {
        const{ findOrderInput,ordersArray,searching,orders,doctors,services,
            appointment,
            timeArray,
            setAppointmentSpec,
            setAppointmentShedule,
            setAppointmentDoctor,
            clearAppointment,
            setAppointmentTime,
            setAppointmentComment,
            deleteOrder
        } = this.props;
        return (
            <>
                {this.state.order && <ChangeOrder
                    doctors={doctors}
                    services={services}
                    order={this.state.order}
                    clearOrder={this.changeOrder}
                    appointment={appointment}
                    timeArray={timeArray}
                    setAppointmentSpec={setAppointmentSpec}
                    setAppointmentShedule={setAppointmentShedule}
                    setAppointmentDoctor={setAppointmentDoctor}
                    clearAppointment={clearAppointment}
                    setAppointmentTime={setAppointmentTime}
                    setAppointmentComment={setAppointmentComment}
                    deleteOrder={deleteOrder}
                />}
            <div className = "orders-container">
                <div className = "orders-item find-order">
                    <input className = " appointment admin-form" type="text" onKeyDown={this.enterPressed} onChange={this.changeInputFindOrder}/>
                    {findOrderInput &&
                    <button className = "btn service-btn"  id='enter' onClick={this.findOrders}>Найти</button>
                    }
                    {searching && ordersArray.length === 0 && <p>Заказ не найден</p>}
                    {ordersArray.map(el => (
                        <div className = "order"  key={el._id}>
                            <div className = "order-date">
                                <Link onClick={this.changeOrder} id={el._id} className = "order-info">{el.orderNumber}</Link>
                                <p>{el.date.split('T')[0]}</p>
                                <p>{el.time}</p>
                            </div>
                            <div className="name-info">
                                 <div className="info-serv-doc">
                                    <Link to={`/user/${el.user._id}`} className = "order-info">{`${el.user.email}`}</Link>
                                    <Link to={`/doctors/${el.doctor._id}/false`} className = "order-info">{el.doctor.name}</Link>
                                    <Link to={`/services/${el.spec._id}/false`} className = "order-info">{el.spec.name}</Link>
                                </div>                                
                            </div>
                        </div>
                    ))}
                </div>
                <div className = "orders-item">
                    {orders.map(el => (
                        <div  className = "order"  key={el._id} >
                            <div className = "order-date">
                                <Link onClick={this.changeOrder} id={el._id} className = "order-info">{el.orderNumber}</Link>
                                <p>{el.date.split('T')[0]}</p>
                                <p>{el.time}</p>
                            </div>
                            <div className="name-info">
                                <div className="info-serv-doc">
                                    <Link onClick={this.emailPressed} className = "order-info">{`${el.user.email}`}</Link>
                                    <Link to={`/doctors/${el.doctor._id}/false`} className = "order-info">{el.doctor.name}</Link>
                                    <Link to={`/services/${el.spec._id}/false`} className = "order-info">{el.spec.name}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
        );
    }
}

export default Orders;