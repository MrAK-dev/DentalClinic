import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Switch, Route} from "react-router-dom";

import {
    changeInputValueDoctorForm,
    changeInputValueServiceForm,
    postDoctors,
    changeSelectedDoctorId,
    changeSelectedServiceId,
    putDoctors,
    deleteDoctors,
    changeSpecialityArray
} from "../../actions/actions";

import {
    changeFindUserInput,
    findUser,
    deleteUser,
    changeInputValueUserForm,
    putUser,
    getUsers,
} from "../../actions/user"

import {
    postServices,
    putServices,
    deleteServices
} from "../../actions/services"

import {
    setSheduleDoctor,
    postShedule,
} from "../../actions/shedule"

import  {
    getOrders,
    changeInputFindOrder,
    findOrdersArray,
    deleteOrder
} from "../../actions/orders"

import  {
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment
} from "../../actions/appointment"

import Shedule from './Shedule'
import ChangeUser from './ChangeUser'
import ChangeServicesDoctors from './ChangeServices-Doctors'
import Orders from "./Orders/Orders";



export class Admin extends React.Component {

    render() {
        const {
            doctors,
            postNewShedule,
            postNewDoctor,
            postNewService,
            changeDoctorId,
            changeServiceId,
            services,
            categories,
            setSheduleDoctor,
            postShedule,
            changeInputValueDoctorForm,
            changeInputValueServiceForm,
            postDoctors,
            changeSelectedDoctorId,
            changeSelectedServiceId,
            putDoctors,
            deleteDoctors,
            putServices,
            deleteServices,
            postServices,
            changeSpecialityArray,
            specialityArray,
            user,
            users,
            findUserInput,
            changeFindUserInput,
            findUser,
            deleteUser,
            userError,
            changeUserForm,
            changeInputValueUserForm,
            putUser,
            getUsers,
            getOrders,
            orders,
            changeInputFindOrder,
            findOrderInput,
            findOrdersArray,
            ordersArray,
            searching,
            appointment,
            timeArray,
            setAppointmentSpec,
            setAppointmentShedule,
            setAppointmentDoctor,
            clearAppointment,
            setAppointmentTime,
            setAppointmentComment,
            deleteOrder,
            access
        } = this.props;

        return (
            <div className="main">
                <div className="info-wrap">
                    <div className = " btn-box">
                        <Link to='/admin/change-shedule' className = "btn link admin">Расписание</Link>
                        <Link to='/admin/change-doctors' className = "btn link admin">Сотрудники</Link>
                        <Link to='/admin/change-services' className = "btn link admin">Сервисы</Link>
                        <Link to='/admin/change-user' className = "btn link admin">Пользователи</Link>
                        <Link to='/admin/change-orders' className = "btn link admin">Заказы</Link>
                    </div>
                    <Switch>
                        <Route path='/admin/change-shedule' render={() => <Shedule
                            doctors={doctors}
                            postNewShedule={postNewShedule}
                            setSheduleDoctor={setSheduleDoctor}
                            postShedule={postShedule}
                        />} />
                        <Route path='/admin/change-doctors' render={() => <ChangeServicesDoctors
                            categories={categories}
                            data={doctors}
                            specialityArray={specialityArray}
                            itemId={changeDoctorId}
                            changeId={changeSelectedDoctorId}
                            form={postNewDoctor}
                            postItem={postDoctors}
                            putItem={putDoctors}
                            deleteItem={deleteDoctors}
                            changeInputValues={changeInputValueDoctorForm}
                            changeSpecialityArray={changeSpecialityArray}
                        />} />
                        <Route path='/admin/change-services' render={() => <ChangeServicesDoctors
                            data={services}
                            itemId={changeServiceId}
                            changeId={changeSelectedServiceId}
                            form={postNewService}
                            postItem={postServices}
                            putItem={putServices}
                            deleteItem={deleteServices}
                            changeInputValues={changeInputValueServiceForm}
                        />} />
                        <Route path='/admin/change-user' render={() => <ChangeUser
                            user={user}
                            access={access}
                            users={users}
                            findUserInput={findUserInput}
                            changeFindUserInput={changeFindUserInput}
                            findUser={findUser}
                            deleteUser={deleteUser}
                            error={userError}
                            changeUserForm={changeUserForm}
                            changeInputValueUserForm={changeInputValueUserForm}
                            putUser={putUser}
                            getUsers={getUsers}
                        />} />
                        <Route path='/admin/change-orders' render={() => <Orders
                            getOrders={getOrders}
                            orders={orders}
                            doctors={doctors}
                            services={services}
                            users={users}
                            findOrderInput={findOrderInput}
                            ordersArray={ordersArray}
                            searching={searching}
                            changeInputFindOrder={changeInputFindOrder}
                            findOrdersArray={findOrdersArray}
                            getUsers={getUsers}
                            appointment={appointment}
                            timeArray={timeArray}
                            setAppointmentSpec={setAppointmentSpec}
                            setAppointmentShedule={setAppointmentShedule}
                            setAppointmentDoctor={setAppointmentDoctor}
                            clearAppointment={clearAppointment}
                            setAppointmentTime={setAppointmentTime}
                            setAppointmentComment={setAppointmentComment}
                            deleteOrder={deleteOrder}
                        />} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        doctors:state.app.doctors,
        postNewShedule:state.shedule.postNewShedule,
        postNewDoctor:state.app.postNewDoctor,
        postNewService:state.app.postNewService,
        changeDoctorId:state.app.changeDoctorId,
        changeServiceId:state.app.changeServiceId,
        specialityArray:state.app.specialityArray,
        services: state.services.services,
        categories: state.services.categories,
        user:state.user.user,
        access:state.user.access,
        findUserInput:state.user.findUserInput,
        userError:state.user.error,
        changeUserForm:state.user.changeUserForm,
        users:state.user.users,
        orders:state.orders.orders,
        findOrdersArray:state.orders.findOrdersArray,
        findOrderInput:state.orders.findOrderInput,
        ordersArray:state.orders.ordersArray,
        searching:state.orders.searching,
        appointment:state.appointment.appointment,
        timeArray:state.appointment.timeArray
    }
};

const mapDispatchToProps = {
    setSheduleDoctor,
    postShedule,
    changeInputValueDoctorForm,
    changeInputValueServiceForm,
    postDoctors,
    changeSelectedDoctorId,
    changeSelectedServiceId,
    putDoctors,
    deleteDoctors,
    postServices,
    putServices,
    deleteServices,
    changeSpecialityArray,
    changeFindUserInput,
    findUser,
    deleteUser,
    changeInputValueUserForm,
    putUser,
    getUsers,
    getOrders,
    changeInputFindOrder,
    findOrdersArray,
    setAppointmentSpec,
    setAppointmentShedule,
    setAppointmentDoctor,
    clearAppointment,
    setAppointmentTime,
    setAppointmentComment,
    deleteOrder
};

export default connect (mapStateToProps,mapDispatchToProps)(Admin)