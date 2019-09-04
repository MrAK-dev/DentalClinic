import React from 'react';
import {connect} from 'react-redux';
import {Switch} from "react-router-dom";

import {getDoctors} from "./actions/actions";
import {getServices, getCategories} from "./actions/services";
import {getUser} from "./actions/auth"
import {getOrders} from "./actions/orders"

import Loader from "./components/hooks/loader";
import Header from "./components/header/index";
import Footer from "./components/Footer";
import {route} from './utils/formFields'
import { PrivateRoute } from "./privateRouter";


function  makeHashchange (event) {
    window.scroll(0, 0)
} 

export class App extends React.Component {

    componentDidMount() {
        this.props.getDoctors();
        this.props.getServices();
        this.props.getCategories();

       if(localStorage.getItem('userId')) this.props.getUser()

       window.addEventListener = ( "hashchange", makeHashchange)

    }

    render() {

        return (
              <Loader flag={this.props.app.isFetching}>
                  <Header/>
                    <Switch>
                        {route.map(el => (
					        <PrivateRoute
                                protectedRoute={el.protected}
                                key={el.id}
                                exact={el.exact}
                                path={el.path}
                                component={el.component}
                            />
				        ))}
                    </Switch>
                <Footer />
             </Loader>
        );
    }
}

const mapStateToProps = state => {
    return {
        app:state.app,
        appoinLoad:state.appointment.isFetching,
        ordersLoad:state.orders.isFetching,
        appLoad:state.app.isFetching,
        servicesLoad:state.services.isFetching,
        userLoad:state.user.isFetching,
        sheduleLoad:state.shedule.isFetching,
    }
};

const mapDispatchToProps = {
    getDoctors,
    getServices,
    getCategories,
    getUser,
    getOrders
};

export default connect (mapStateToProps,mapDispatchToProps)(App)
