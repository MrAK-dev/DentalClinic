import React from 'react';
import {CustomSelect} from "../../hooks/select";
import Calendar from "../../Calendar";
import ConfirmButton from "../../ConfirmButton";

class ChangeOrder extends React.Component {
    state = {
        order: {
            spec: '',
            doctor: '',
            time: '',
            comment: '',
            orderNumber: null,
            user: '',
        },
        flag: false,
        showConfirm: false,
    };

    changeConfirm = () => {
        this.setState({showConfirm: !this.state.showConfirm})
    };

    componentDidMount() {
        this.setState({
            order: {
                spec: this.props.order.spec,
                doctor: this.props.order.doctor,
                time: this.props.order.time,
                comment: this.props.order.comment,
                orderNumber: this.props.order.orderNumber,
                date: this.props.order.date.split('T')[0],
                user: this.props.order.user,
            }
        });
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    changeOrder = () => {
        this.setState({flag: !this.state.flag})
    };

    setDoctor = (e) => {
        this.props.setAppointmentDoctor(this.props.doctors.find(el => el.name === e)._id)
    };

    setSpec = (e) => {
        this.props.setAppointmentSpec({services: this.props.services, data: e})
    };

    setShedule = (e) => {
        this.props.setAppointmentShedule({
            data: e.target.id,
            services: this.props.services,
            doctors: this.props.doctors
        })
    };

    setTime = (e) => {
        this.props.setAppointmentTime(e.target.value)
    };

    setComment = (e) => {
        this.props.setAppointmentComment(e.target.value)
    };

    deleteAndPostNewOrder = () => {
        this.props.deleteOrder({
            id: this.props.order._id,
            newOrder: {
                spec: this.props.appointment.specId,
                doctor: this.props.appointment.doctorId,
                shedule: this.props.appointment.sheduleId,
                time: this.props.appointment.time,
                comment: this.props.appointment.comment,
                orderNumber: this.state.order.orderNumber,
                user:this.state.order.user._id
            }
        });
        this.changeConfirm()
    };

    render() {
        const {
            doctors,
            appointment,
            timeArray
        } = this.props;
        return (
            <>
                {this.state.showConfirm &&
                <ConfirmButton
                    yes={this.deleteAndPostNewOrder}
                    no={this.changeConfirm}
                    text={'Уверены что хотите изменить заказ?'}
                />
                }
                <div className = "change-order-form" >

                    <input  className = "appointment admin-form order-change-input" readOnly={true} id={this.state.order.orderNumber}
                           defaultValue={this.state.order.orderNumber}
                    />
                    <input className = "appointment admin-form" readOnly={true} id={this.state.order.spec._id}
                           defaultValue={this.state.order.spec.name}
                    />
                    <input  className = "appointment admin-form" readOnly={true} id={this.state.order.doctor._id}
                           defaultValue={this.state.order.doctor.name}
                    />
                    <input className = "appointment admin-form" readOnly={true} id={this.state.order.user._id}
                           defaultValue={this.state.order.user.email}
                    />
                    <input className = "appointment admin-form" readOnly={true} id={this.state.order.date}
                           defaultValue={this.state.order.date}
                    />
                    <input  className = "appointment admin-form" readOnly={true} id={this.state.order.time}
                           defaultValue={this.state.order.time}
                    />
                    <input  className = "appointment admin-form" readOnly={true} id={this.state.order.comment}
                           defaultValue={this.state.order.comment}
                    />
                    <button className = "btn service-btn"  onClick={this.changeOrder}>Изменить заказ</button>
                    {this.state.flag &&
                    <div className = "order-change-input">
                        <input className = "appointment admin-form" readOnly={true} id={this.state.order.orderNumber}
                               defaultValue={this.state.order.orderNumber}
                        />
                        <CustomSelect
                            label="Выбор врача"
                            emptyLine={false}
                            options={doctors}
                            clickOptionEvent={this.setDoctor}
                        />
                        {appointment.doctorId &&
                            <CustomSelect
                                label="Выбор услуги"
                                emptyLine={false}
                                options={appointment.doctorId ? doctors.find(el => el._id === appointment.doctorId).speciality : []}
                                clickOptionEvent={this.setSpec}
                            />
                        }
                        {appointment.specId &&
                        <Calendar
                            doctor={doctors.find(el => el._id === appointment.doctorId)}
                            action={this.setShedule}
                        />
                        }
                        {appointment.sheduleId && (
                            <div className="appointment-time">
                                <div className="btn-box">
                                    {timeArray.map((el, index) => (
                                        <div className="radio-btn" key={Object.keys(el)}>
                                            <input
                                                type="radio"
                                                className="radio"
                                                name="choise-time"
                                                id={index}
                                                onChange={this.setTime}
                                                value={Object.keys(el)}
                                            />
                                            <label htmlFor={index}>{Object.keys(el)}</label>
                                        </div>
                                    ))}
                                </div>
                                {appointment.time && (
                                    <textarea
                                        className="appointment comment"
                                        rows="2"
                                        placeholder="Добавить комментарий "
                                        onChange={this.setComment}
                                    />
                                )}
                            </div>
                        )}
                        {appointment.time &&
                        <button className="btn link" onClick={this.changeConfirm}>Подтвердите запись
                        </button>
                        }
                    </div>
                    }
                </div>

                <div className="wrap-check-off" onClick={this.props.clearOrder}></div>
            </>
        )
    }
}

export default ChangeOrder;