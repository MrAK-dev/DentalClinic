import React from 'react';

const Footer = () => {
    return (
        <footer className = "footer">
           <div className="footer-part contacts">
                    <h4 className ="icon-location">Адрес</h4>
                    <p> г. Харьков</p>
                    <p>пл. Конституции, 26</p>
           </div>
           <div className="footer-part logo-box">
               <img src="../../images/logo.png" alt="logo"/>
               </div>
           <div className="footer-part contacts">
              <h4 className  = "icon-phone"> Контакты</h4>
              <p>+38 ( 096 ) 123 - 45 - 67</p>
              <p>+38 ( 050 ) 123 - 45 - 67</p>
              <p> +38 ( 063 ) 123 - 45 - 67</p>
            </div>
        </footer>
    );
};

export default Footer;