import React, {useState} from 'react';
import Primers from './semester/Primers';
import Segundos from './semester/Segundos';
import Tercers from './semester/Tercers';
import {Button} from '@material-ui/core';
import StudentAddModal from '@components/pages/modals/AddStudent';
 
const Registro = ({ isActive }) => {

    
    const [showAddPrograma, setShowAddPrograma] = useState(false)

    const handleShowAdd = () => {
        setShowAddPrograma(true)
    }


  const [activeTab1, setActiveTab1] = useState('PRIMERS');

    const toggle1 = (tab1) => {
        if (activeTab1 !== tab1) setActiveTab1(tab1);
    };

    

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Registro de competencias por semestre</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-11 ml-5">
                            
           <Button onClick={() => handleShowAdd()}>Añadir Competencias</Button>
           
           <div>{StudentAddModal(showAddPrograma, setShowAddPrograma)}</div>
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab1 === 'PRIMERS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle1('PRIMERS')
                                                }
                                            >
                                                Primer semestre
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab1 === 'SEGUNDOS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle1('SEGUNDOS')
                                                }
                                            >
                                                Segundo semestre
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab1 === 'TERCERS'
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    toggle1('TERCERS')
                                                }
                                            >
                                                Tercer semestre
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <Primers
                                            isActive={activeTab1 === 'PRIMERS'}
                                        />
                                        <Segundos
                                            isActive={activeTab1 === 'SEGUNDOS'}
                                        />
                                        <Tercers
                                            isActive={activeTab1 === 'TERCERS'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registro;