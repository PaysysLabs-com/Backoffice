import React from 'react';
import { DEMO } from './../../../../../store/constant';
import Aux from "../../../../../hoc/_Aux";
import logo from './../../../../../assets/images/mojaloop-logo.png';

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                <a href={DEMO.BLANK_LINK} className="b-brand">
                    {/* <div className="b-bg">
                        <i className="feather icon-trending-up" />
                    </div> */}
                    {/* <span className="b-title">Dashboard</span> */}
                    <img src={logo} alt="no logo" style={{ width: '50%' }} />
                </a>
                <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
