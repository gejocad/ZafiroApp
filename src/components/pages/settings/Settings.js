import React, {useState} from 'react';
import Dates from './Dates';
import Images from './Images';

const Setting = () => {
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
                            <h1>Ajustes</h1>
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
                                                Datos de la institución
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
                                                Imagenes
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <Dates
                                            isActive={activeTab === 'LISTADO'}
                                        />
                                        <Images
                                            isActive={activeTab === 'REGISTO'}
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

export default Setting;
