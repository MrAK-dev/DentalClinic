import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

export class MoreInfo extends React.Component {
    
    render() {
        const {match,doctors,services} = this.props;
        const doctor = doctors.find(el => el._id === match.params.doctor);
        const service = services.find(el => el._id === match.params.service);
        return (
            <>
            <div className="main">
                {doctor &&
                    <div className = "info-wrap">
                        <div className="info">
                            <div className="info-item">
                                <img src={`../.${doctor.photo}`} alt={doctor.name}/>
                            </div>
                             <div className="info-item info-desc">
                                 <h3> {doctor.name} </h3>
                                <p className = "highlights">{doctor.profession}</p>
                                <p className = "highlights">Опыт работы более {new Date().toISOString().split('T')[0].split('-')[0] - doctor.experience.split('T')[0].split('-')[0]}  лет</p>
                                {doctor.skillsDescription.split ("<br>").map ( (el, index) => (  <p key= {index}> { el } </p>)  ) }
                                 {match.params.flag === 'true' && <Link to={`/appointment/${doctor._id}/false`} className = "btn link">Записаться на приём</Link>}
                             </div>
                        </div>
                    </div>}

                    {service  &&
                    <div  className = "info-wrap">
                        {service.name}
                        <p>Duration: {service.duration} h</p>
                        <p>{service.description}</p>
                        <p>Price: {service.price} грн.</p>
                        {match.params.flag === 'true' && <Link to={`/appointment/${service._id}`} className = "btn link admin">Записаться на приём</Link>}

                    </div>}
               </div>
              
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        doctors:state.app.doctors,
        services:state.services.services
    }
};

const mapDispatchToProps = {
};

export default connect (mapStateToProps,mapDispatchToProps)(MoreInfo)