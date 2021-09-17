import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '@hooks/useForm';
import { AddPrograma } from '@actions/programaAction';
import {Button} from '@components';


const Registro = ({isActive}) => {  

    
    const dispatch = useDispatch()


    const [values, handleInputChange, reset ] = useForm({
        nombre:'',
        resolucion:'',
        codigo:'',
        nombreS11:'',
        nombreS12:'',
        nombreS13:'',
        nombreS14:'',
        nombreS15:'',
        nombreS16:'',
        codigoS11:'',
        codigoS12:'',
        codigoS13:'',
        codigoS14:'',
        codigoS15:'',
        codigoS16:''
    })


    const { 
        nombre,
        resolucion,
        codigo,
        nombreS11,
        nombreS12,
        nombreS13,
        nombreS14,
        nombreS15,
        nombreS16,
        codigoS11,
        codigoS12,
        codigoS13,
        codigoS14,
        codigoS15,
        codigoS16 
    } = values

    const handleAddPrograma = e => {
        e.preventDefault()

        dispatch(AddPrograma(
            nombre,
            resolucion,
            codigo,
            nombreS11,
            nombreS12,
            nombreS13,
            nombreS14,
            nombreS15,
            nombreS16,
            codigoS11,
            codigoS12,
            codigoS13,
            codigoS14,
            codigoS15,
            codigoS16))
        reset()

    }


    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <form className="form-horizontal">
                <div className="form-group row">
                    <label
                        htmlFor="inputName"
                        className="col-sm-2 col-form-label"
                    >
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Name"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputEmail"
                        className="col-sm-2 col-form-label"
                    >
                        Resolucion
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Resolucion"
                            name="resolucion"
                            value={resolucion}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputName2"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Codigo"
                            name="codigo"
                            value={codigo}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Materia 1 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="materia 1 S1"
                            name="nombreS11"
                            value={nombreS11}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo de materia 1 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="codigo 1 S1"
                            name="codigoS11"
                            value={codigoS11}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Materia 2 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="materia 2 S1"
                            name="nombreS12"
                            value={nombreS12}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo de materia 2 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="codigo 2 S1"
                            name="codigoS12"
                            value={codigoS12}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Materia 3 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="materia 3 S1"
                            name="nombreS13"
                            value={nombreS13}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo de materia 3 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="codigo 3 S1"
                            name="codigoS13"
                            value={codigoS13}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Materia 4 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="materia 4 S1"
                            name="nombreS14"
                            value={nombreS14}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo de materia 4 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="codigo 4 S1"
                            name="codigoS14"
                            value={codigoS14}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Materia 5 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="materia 5 S1"
                            name="nombreS15"
                            value={nombreS15}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo de materia 5 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="codigo 5 S1"
                            name="codigoS15"
                            value={codigoS15}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Materia 6 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="materia 6 S1"
                            name="nombreS16"
                            value={nombreS16}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputSkills"
                        className="col-sm-2 col-form-label"
                    >
                        Codigo de materia 6 de semestre 1
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="codigo 6 S1"
                            name="codigoS16"
                            value={codigoS16}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
               
                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <Button type="submit" onClick={handleAddPrograma} theme="danger">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registro;
