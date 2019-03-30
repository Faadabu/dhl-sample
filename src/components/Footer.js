import React, { Component } from 'react';
import logo from "../logo.png";

class Footer extends Component {
 

    render() {
        return (
            <div class="footer">
                <div>
                    <img src={logo} className="footer-logo" alt="logo" />
                    <p>
                        The company is disrupting the $150 billion <br /> 
                        Africa logistics industry, which still mostly <br />
                        relies on telephones, opaque pricing and <br />
                        full of expensive middlemen.
                    </p>
                </div>
                <div>
                    <h3>For shippers</h3>
                    <p>Login</p>
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                </div>
                <div>
                    <h3>For shippers</h3>
                    <p>Login</p>
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>22 Ikorodu road, Jubowu Yaba.</p>
                    <p>Lagos, Nigeria</p>
                    <br />
                    <p>info@kobo360.com</p>
                    <p>08037899876</p>
                </div>
            </div>
        );
    }
}

export default Footer;