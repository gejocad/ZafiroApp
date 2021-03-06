import React, {useState} from 'react';
import Listado from './Listado';
import Competencias from './Competencias';
import Registro from './Registro';

const Programa = () => {
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
                            <h1>Registro de programas</h1>
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
                                                Listado
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'COMPETENCIAS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('COMPETENCIAS')
                                                }
                                            >
                                                Competencias
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'REGISTRO'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('REGISTRO')
                                                }
                                            >
                                                Registrar
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <Listado
                                            isActive={activeTab === 'LISTADO'}
                                        />
                                        <Competencias
                                            isActive={activeTab === 'COMPETENCIAS'}
                                        />
                                        <Registro
                                            isActive={activeTab === 'REGISTRO'}
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

export default Programa;
