import React from 'react';
import {Link} from 'react-router-dom';
// import Button from "../buttons/button";



export default class Team extends React.Component {
    render( ) {
        const {doctorsArr } = this.props
        // console.log (doctorsArr)
        return (
            <>
                <h2>Наши врачи</h2>
                <div className = "team-container">
                    {doctorsArr.map  ( el => 
                         <div className="item"  key = {el._id} >
                             <div className="photo">
                                <img src= {el.photo} alt= {el.name}/>
                                <Link to = {`/doctors/${el._id}/true`}>
                                    <div className="desc">
                                        <h3>{el.name}</h3>
                                        <p className="experience">Опыт работы {new Date().toISOString().split('T')[0].split('-')[0] - el.experience.split('T')[0].split('-')[0]} лет</p>
                                        <p className="rank">{el.profession}</p>
                                    </div>
                                </Link>
                             </div>
                           
                             {/* <div className="link-box">
                                <Link to = "/doctors" className = "btn link more">Подробнее ...</Link>
                                <Link to ={`/appointment/${el._id}`} className = "btn link ">Записаться на приём</Link>
                            </div> */}
                        </div>
                    ) }
                 </div>
            </>
        ) 
    }
}        