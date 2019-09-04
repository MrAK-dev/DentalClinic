import React from 'react';

export default class Input extends React.Component {
    render(){
        const {el,className,changeInputValues} = this.props;
        return (
            <input
                className = {className ? className : "appointment admin-form"}
                id={el.id}
                type={el.type}
                name={el.name}
                value={el.value}
                placeholder={el.placeholder}
                minLength={el.minLength}
                maxLength={el.maxLength}
                required={el.required}
                pattern={el.pattern}
                checked={el.checked}
                defaultChecked={el.defaultChecked}
                readOnly={el.readOnly}
                onChange={(e) => changeInputValues(e)}
            />
        );
    }
};
