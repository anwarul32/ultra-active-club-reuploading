import "./Header.css";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header-text">
                <FontAwesomeIcon icon = {faDumbbell}></FontAwesomeIcon>
                <h1 className="site-name">Daily-Active-Club</h1>
            </div>
        </div>
    );
};

export default Header;