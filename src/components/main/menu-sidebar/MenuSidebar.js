import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const MenuSidebar = () => {
    const [t] = useTranslation();
    const user = useSelector((state) => state.auth.currentUser);
    

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src="https://static8.depositphotos.com/1000559/852/i/600/depositphotos_8521908-stock-photo-blue-sapphire-gemstone-isolated-gemstone.jpg"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{opacity: '.8'}}
                />
                <span className="brand-text font-weight-light">ZafiroApp</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src={'/img/default-profile.png'}
                            className="img-circle elevation-2"
                            alt="User"
                        />
                    </div>
                    <div className="info">
                        <Link to="/profile" className="d-block">
                            {"email"}
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
                                <p>{t('menusidebar.label.dashboard')}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" exact className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>{t('menusidebar.label.profile')}</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" exact className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>{t('menusidebar.label.profile')}</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuSidebar;