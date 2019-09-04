import React from 'react';
import moment from "moment";
import {connect} from "react-redux";
import 'moment/locale/ru';

import {
    createCalendarMonthArray,
    changeCalendarMonth,
    resetCurrent

} from "../actions/calendar";

export class Calendar extends React.Component {

    componentDidMount() {
        moment.locale('ru');
        this.props.createCalendarMonthArray(this.props.doctor)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.doctor !== this.props.doctor) this.props.createCalendarMonthArray(this.props.doctor)
    }

    componentWillUnmount() {
        this.props.resetCurrent()
    }

    addMonth = () => {
        this.props.changeCalendarMonth(1);
        this.props.createCalendarMonthArray(this.props.doctor)
    };

    subMonth = () => {
        this.props.changeCalendarMonth(-1);
        this.props.createCalendarMonthArray(this.props.doctor)
    };

    action = (e) => {
        this.props.action(e)
    };

    render() {
        const {current,monthArray} = this.props;
        return (
            <div className = "calendar-container">
                <div className = "calendar-title-box" >
                    <button className= "btn angle" onClick={this.subMonth}>
                        <span className="icon-angle-left"></span>
                    </button>
                    <h4>{current.format('MMMM-YYYY')}</h4>
                    <button  className= "btn angle"  onClick={this.addMonth}>
                        <span className="icon-angle-right"></span>
                    </button>
                </div>
                <div className = "weekdays">
                    {moment.weekdaysShort(true).map(el => (
                        <p  key={el}>{el}</p>
                    ))}
                </div>
                <div  className = "days">
                    {monthArray.map(el => (
                        <button
                            key={el.day}
                            id={el.day}
                            disabled={el.disabled}
                            style={{
                                backgroundColor:el.backgroundColor,
                                border:el.border
                            }}
                            onClick={this.action}
                        >
                            {moment(el.day).format('DD')}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        current:state.calendar.current,
        monthArray:state.calendar.monthArray
    }
};

const mapDispatchToProps = {
    createCalendarMonthArray,
    changeCalendarMonth,
    resetCurrent
};

export default connect (mapStateToProps,mapDispatchToProps)(Calendar)

