import React, {useState} from 'react';
import Primers from './Primers';
import Segundos from './Segundos';
import Tercers from './Tercers';
import Egresados from './Egresados';

const Reporte = () => {
    const [activeTab, setActiveTab] = useState('PRIMERS');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Notas y certificados</h1>
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
                                                    activeTab === 'PRIMERS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('PRIMERS')
                                                }
                                            >
                                                Primer semestre
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'SEGUNDOS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('SEGUNDOS')
                                                }
                                            >
                                                Segundo semestre
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'TERCERS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('TERCERS')
                                                }
                                            >
                                                Tercer semestre
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === 'EGRESADOS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle('EGRESADOS')
                                                }
                                            >
                                                Egresados
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <Primers
                                            isActive={activeTab === 'PRIMERS'}
                                        />
                                        <Segundos
                                            isActive={activeTab === 'SEGUNDOS'}
                                        />
                                        <Tercers
                                            isActive={activeTab === 'TERCERS'}
                                        />
                                         <Egresados
                                            isActive={activeTab === 'EGRESADOS'}
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

export default Reporte;
