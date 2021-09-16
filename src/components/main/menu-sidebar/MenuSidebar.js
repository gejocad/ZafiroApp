import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

const MenuSidebar = () => {
    
    const { email, image } = useSelector(state => state.auth)
    

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src="https://i.ibb.co/WpqWtfc/logoSolo.png"
                    alt="AdminLTE Logo"
                    className="brand-image"
                    style={{opacity: '.8'}}
                />
                <span className="brand-text font-weight-light">ZafiroApp</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        {/*<img
                            src={image}
                            className="img-circle elevation-2"
                            alt="User"
                        />*/}
                    </div>
                    <div className="info">
                        <Link to="/profile" className="d-block">
                            {email}
                        </Link>
                    </div>
                </div>
                <nav className="mt-2" style={{overflowY: 'hidden'}}>
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" exact className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>Perfil</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/students" exact className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>Registro Estudiantes</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuSidebar;
