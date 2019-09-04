import React from "react";


export default ({ text, ...rest }) => 
<button {...rest}>{text}</button>;
