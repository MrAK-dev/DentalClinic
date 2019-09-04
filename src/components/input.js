import React from 'react';

export default ({ id, label, type = "text", fail, touch, ...rest }) => (
    <label htmlFor={id} className="input-box">
        {label}
        <input 
            className={fail && touch ? 'input-box__input input-box__input--fail' : 'input-box__input'}
            id={id}
            type={type}
            {...rest}
        />
    </label>
);