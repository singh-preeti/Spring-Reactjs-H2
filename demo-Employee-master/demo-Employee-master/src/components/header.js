import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow text-white">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Demo Employee</a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link px-2 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-2 text-white" to="/add">Add</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;