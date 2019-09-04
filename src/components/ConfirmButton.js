import React, {Component} from 'react';

class ConfirmButton extends Component {
    render(){
        const {yes,no,text} = this.props;
        return(
            <>
                <div  className = "confirm-button" >
                    <h3 >{text}</h3>
                    <div className="btns">
                        <button className = "btn confirm yes" onClick={() => yes()}>Да</button>
                        <button className = "btn confirm no" onClick={() => no()}>Нет</button>                        
                    </div>

                </div>
                <div className = "wrap-check-off" style={{zIndex:'10'}}  onClick={no}/>
            </>
        )
    }
}

export default ConfirmButton;