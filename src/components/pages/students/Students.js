import React, {useState} from 'react';
import Listado from './Listado';
import Registro from './Registro';
import SettingsTab from './SettingsTab';

const Estudiante = () => {
    const [activeTab, setActiveTab] = useState('LISTADO');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Estudiantes</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-11 ml-5">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'LISTADO'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('LISTADO')
                                                }
                                            >
                                                Este semestre
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'REGISTO'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('REGISTO')
                                                }
                                            >
                                                Todos los estudiantes
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'SETTINGS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('SETTINGS')
                                                }
                                            >
                                                Egresados
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <Listado
                                            isActive={activeTab === 'LISTADO'}
                                        />
                                        <Registro
                                            isActive={activeTab === 'REGISTO'}
                                        />
                                        <SettingsTab
                                            isActive={activeTab === 'SETTINGS'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Estudiante;
