import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Container } from '@material-ui/core';

const Header = () => {
    return (
        <Container className="header-bg" maxWidth="xl">
            <div className="header fixed-top">
                <img src={logo} alt=""/>
                <div className="menu">
                    <ul>
                        <li>About</li>
                        <li>Post</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </Container>        
    );
};

export default Header;