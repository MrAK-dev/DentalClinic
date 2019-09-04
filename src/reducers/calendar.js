import * as types from '../actionsTypes/actionsTypes'
import moment from "moment";

const defaultState = {
    monthArray: [],
    current: moment()
};

export const calendarReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.CREATE_CALENDAR_MONTH_ARRAY: {
            const daysArray = [];
            for (let x = 1; x <= state.current.daysInMonth(); x++) {
                const el = state.current.date(x).format('YYYY-MM-DD');
                const day = {
                    day: el,
                    disabled: moment(el).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')
                        || (moment(el).day() === 6)
                        || (moment(el).day() === 0)
                        || moment(el).month() !== state.current.month()
                        || !action.payload.shedule.find(item => item.data === el),
                    backgroundColor: moment(el).month() === state.current.month() ? action.payload.shedule.find(item => item.data === el) ? "#b1e8ca" : "#ff9774" : "lightgrey",
                    border: moment().format('YYYY-MM-DD') === moment(el).format('YYYY-MM-DD') ? "2px solid rgba(17,17,17,0.8)" : null
                };
                daysArray.push(day)
            }

            const prevMonth = moment(state.current).subtract(1, 'months');
            const startDay = state.current.startOf('month').day() === 0 ? 7 : state.current.startOf('month').day();
            for (let x = 1; x < startDay; x++) {
                const el = prevMonth.endOf('month').subtract(x - 1, 'days').format('YYYY-MM-DD');
                const day = {
                    day: el,
                    disabled: moment(el).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')
                        || (moment(el).day() === 6)
                        || (moment(el).day() === 0)
                        || moment(el).month() !== state.current.month()
                        || !action.payload.shedule.find(item => item.data === el),
                    backgroundColor: moment(el).month() === state.current.month() ? action.payload.shedule.find(item => item.data === el) ? "#b1e8ca" : "#ff9774" : "lightgrey",
                    border: moment().format('YYYY-MM-DD') === moment(el).format('YYYY-MM-DD') ? "2px solid rgba(17,17,17,0.8)" : null
                };
                daysArray.unshift(day)
            }
            return {
                ...state,
                monthArray: daysArray
            };
        }

        case types.CHANGE_CALENDAR_MONTH: {
            return {
                ...state,
                current: state.current.add(action.payload, "month")
            };
        }

        case types.RESET_CALENDAR_CURRENT: {
            return {
                ...state,
                current: moment()
            };
        }


        default:
            return state
    }
};