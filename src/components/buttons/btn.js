import React from 'react';

export default ({ text,type = 'button', ...rest }) => (
    <button type={type} {...rest}>
        { text }
    </button>
);