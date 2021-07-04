import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    //views

    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link to = "#" className="navbar-brand">
                    Logo
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to = "#" className="nav-link" aria-current="page">
                                SignUp
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                SignIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );


    //render
    return (
        <header id="header">
            { showNavigation() }
        </header>
    );

};

export default Header;
