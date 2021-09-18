import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';

const MenuSidebar = () => {
    
    const { email } = useSelector(state => state.auth)
    

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
                        <Link to="/programa" className="d-block">
                            <EmailIcon className="nav-icon fas"/>
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
                                <HomeIcon className="nav-icon fas"/>
                                <p>Inicio</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/students" exact className="nav-link">
                                <GroupIcon className="nav-icon fas"/>
                                <p>Estudiantes</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/programa" exact className="nav-link">
                            <CastForEducationIcon className="nav-icon fas"/>
                                <p>Programas</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/reports" exact className="nav-link">
                                <LibraryBooksIcon className="nav-icon fas"/>
                                <p>Notas y certificados</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/setting" exact className="nav-link">
                                <SettingsIcon className="nav-icon fas"/>
                                <p>Ajustes</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuSidebar;
