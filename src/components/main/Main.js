import React from 'react';
import {Link} from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

// import Button from "../buttons/button";
import About from "./aboutUs";
import Team from "./team";
// import MyMap from "./myMap";


import {connect} from 'react-redux'

    
export class Main extends React.Component {
 render() {

    return (
            <main className = "main">

                <aside>
                    <ul className="sidebar-ul">
                        <li className="sidebar-item"><Scrollchor to="#" className="nav-link"><span className="icon-lens"></span></Scrollchor></li>
                        <li className="sidebar-item"><Scrollchor to="#team" className="nav-link"><span className="icon-lens"></span></Scrollchor></li>
                        {/*<li className="sidebar-item"><Scrollchor to="#banner" className="nav-link"><span className="icon-lens"></span></Scrollchor></li>*/}
                        <li className="sidebar-item"><Scrollchor to="#about" className="nav-link"><span className="icon-lens"></span></Scrollchor></li>
                    </ul>
                </aside>

               <div className="container">
                    <div className="wrapper">
                                <div className="title-box">
                                    <img className = "logotype" src="./images/logo.png" alt=""/>
                                    <h1>Стоматология для всей семьи</h1>
                                    <Link to={ `/doctors` } className = "btn ">Записаться на приём</Link>
                                </div>
                    </div>
                </div>

                    <div className="wrapper"  id = "team">
                        <Team doctorsArr = {this.props.app.doctors} />
                    </div>

                {/*<div className=" case" id = "banner">*/}
                {/*        <img className = "banner" src="./images/medical.jpeg" alt="medical"/>*/}
                {/*        <div className="button-box">*/}
                {/*        <Link to={`/appointment`} className = "btn">Записаться на приём</Link>*/}
                {/*        </div>     */}
                {/* </div>*/}

                 <div className="wrapper"  id = "about">
                    <About/>
                 </div>

                {/* <div className="case"> */}
                    {/* <MyMap /> */}
                {/* </div> */}
              </main> 
           
          
        )
    }
}

    const mapStateToProps = state => {
        return {
            app:state.app
        }
    };
    
    const mapDispatchToProps = {
        // postDoctors,
        // postServices
    };
    
    export default connect (mapStateToProps,mapDispatchToProps)(Main)


