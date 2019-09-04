import React from "react";
import {connect} from "react-redux";
import moment from "moment";
import { CustomSelect } from "../hooks/select";

import {
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders
} from "../../actions/appointment";

import Calendar from "../Calendar";

export class Appoint extends React.Component {
    state = {
        pickedDate: null
    };

    componentDidMount() {
        this.props.setAppointmentDoctor(this.props.match.params.doctorId);
        if(this.props.match.params.serviceId !== 'false'){
            this.props.setAppointmentSpec({
                data:this.props.match.params.serviceId,
                services:this.props.services
            })
        }
    }

    componentWillUnmount() {
        this.props.clearAppointment()
    }

    setSpec = (e) => {
        this.props.setAppointmentSpec({
            data: e,
            services: this.props.services
        })
    };

    setShedule = (e) => {
        this.setState({pickedDate: e.target.id});
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

    postOrder = () => {
        this.props.postOrders({
            shedule: this.props.appointment.sheduleId,
            time: this.props.appointment.time,
            doctor: this.props.appointment.doctorId,
            spec: this.props.appointment.specId,
            comment: this.props.appointment.comment,
            user: this.props.user._id
        })
    };


    render() {
        const {appointment, timeArray, doctors, services, match} = this.props;
        const doctor = doctors.find(el => el._id === match.params.doctorId);
        let spec;
        if (appointment.specId) {
            spec = services.find(el => el._id === appointment.specId)
        }
        console.log(this.props)
        return (
            <>
                <div className="main">
                    {doctor &&
                        <div className="info-wrap">
                            <div className="card">
                                <div className="card-item present">
                                    <div className="photo">
                                        <img src={`../../${doctor.photo}`} alt={doctor.name}/>
                                    </div>
                                    <div className="order">
                                        <h3>{doctor.name}</h3>
                                        <p className="highlights">{doctor.profession}</p>
                                        <CustomSelect
                                            label="Выбор услуги"
                                            emptyLine = {false}
                                            options={doctor.speciality}
                                            clickOptionEvent={this.setSpec}
                                        />
                                    </div>
                                </div>
                                <div className="card-item desc">
                                    <div className="date-container">
                                        {appointment.specId &&
                                            <Calendar
                                                doctor={doctor}
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
                                    </div>
                                    {appointment.specId &&
                                        <div className="order-information">
                                            <p>{spec.name}</p>
                                            <p>Длительность: {spec.duration} ч.</p>
                                            <p>Цена от {spec.price} грн.</p>
                                            {this.state.pickedDate &&
                                                <p> {moment(this.state.pickedDate).format("DD-MMMM-YYYY")} </p>
                                            }
                                            {appointment.time &&
                                            <>
                                                <p>{appointment.time}</p>
                                                <button className="btn link" onClick={this.postOrder}>Подтвердите запись
                                                </button>
                                            </>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        appointment: state.appointment.appointment,
        timeArray: state.appointment.timeArray,
        doctors: state.app.doctors,
        services: state.services.services,
        user:state.auth.user
    };
};

const mapDispatchToProps = {
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    postOrders
};

export default connect(mapStateToProps,mapDispatchToProps)(Appoint);
