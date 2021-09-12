import React, {useRef, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const NotificationsDropdown = () => {
    const dropdownRef = useRef(null);

    const [dropdownState, updateDropdownState] = useState({
        isDropdownOpen: false
    });

    const toggleDropdown = () => {
        updateDropdownState({isDropdownOpen: !dropdownState.isDropdownOpen});
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            updateDropdownState({isDropdownOpen: false});
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
                false
            );
        };
    });

    let className = 'dropdown-menu dropdown-menu-lg dropdown-menu-right';

    if (dropdownState.isDropdownOpen) {
        className += ' show';
    }

    return (
        <li
            ref={dropdownRef}
            className="nav-item d-none d-sm-inline-block dropdown"
        >
            <button
                onClick={toggleDropdown}
                type="button"
                className="nav-link"
                data-toggle="dropdown"
            >
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
            </button>
            <div className={className}>
                <span className="dropdown-item dropdown-header">
                    Header notificacion
                </span>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item">
                    <i className="fas fa-envelope mr-2" />
                    <span>
                        Header notificacion
                    </span>
                    <span className="float-right text-muted text-sm">
                        Calidad
                    </span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item">
                    <i className="fas fa-users mr-2" />
                    <span>
                        Amigos
                    </span>
                    <span className="float-right text-muted text-sm">
                        Calidad unidad
                    </span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item">
                    <i className="fas fa-file mr-2" />
                    <span>
                        Reporte notificaciones
                    </span>
                    <span className="float-right text-muted text-sm">
                        Calidad unidad 2
                    </span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="/" className="dropdown-item dropdown-footer">
                    Todas las notificaciones
                </Link>
            </div>
        </li>
    );
};

export default NotificationsDropdown;
