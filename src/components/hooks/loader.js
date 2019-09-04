import React from "react";

export default ({ children, flag }) => (
    flag ?
        <div className = "loader-box">
            <img className = "loader" src="../images/loader.gif" alt="Loading"/>
            {/* <p>  Loading... </p> */}
        </div>
    : children);