import React from 'react';


class CheckBoxWindow extends React.Component {
    changeSpecialityArray = (e) => {
        this.props.changeSpecialityArray(e.target)
    };

    render() {
        const {categories, changeFlag,specialityArray} = this.props;
        console.log(this.props)
        return (
            <>
                <div className = "check-container">
                    {categories.map(el => (
                        <div className = "check-speciality" key={el._id}>
                            <h4>{el.name}</h4>
                            {
                                el.services.map(item => (
                                    <div  className = "check-elem" key={item._id} >
                                        <input
                                            type="checkbox"
                                             value={item._id}
                                             id={item._id}
                                             defaultChecked={specialityArray.find(el => el === item._id)}
                                            onChange={this.changeSpecialityArray}
                                        />
                                            <label htmlFor={item._id} className = "check">   {item.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                    }
                </div>
                <div className = "wrap-check-off"  onClick={changeFlag}></div>
            </>
        )
    }
}

export default CheckBoxWindow;