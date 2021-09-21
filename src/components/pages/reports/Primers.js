import React, { useState } from 'react';
import MaterialTable from 'material-table'
import {Button} from '@material-ui/core';
/*{import {makeStyles} from '@material-ui/core/styles';}*/
import StudentDetail from '@components/pages/modals/StudentDetail';
import StudentAddModal from '@components/pages/modals/AddStudent';
import { useDispatch, useSelector } from 'react-redux';
import { activePrograma } from '@actions/programaAction';


const Primers = ({isActive}) => {

    const dispatch = useDispatch()
    const [showDetailPrograma, setShowDetailPrograma] = useState(false)
    const [showAddPrograma, setShowAddPrograma] = useState(false)
    const { programa } = useSelector(state => state.programa)
    console.log(programa)

    const handleShowDetailPrograma = (event, data) => {

        dispatch(activePrograma(data.id, data))
        setShowDetailPrograma(true)
    }
    const handleShowAdd = () => {
        setShowAddPrograma(true)
    }

    console.log(programa)

    const columnas = [
        
        {
            title: 'Documento',
            field: 'nombre',
            type: 'text',
            align: 'center'
        },
        {
            title: 'Estudiante',
            field: 'resolucion'
        },
        {
            title: 'Correo',
            field: ''
        }
    ];

   

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            
           <MaterialTable
                columns={columnas}
                data={programa}
                title='Estudiantes'  
                actions={[
                    {
                        icon: 'Detail',
                        tooltip: 'Detalles',
                        onClick: (event, rowData) => {handleShowDetailPrograma(event, rowData)}
                    },
                    {
                        icon: 'delete_outline',
                        tooltip: 'Borrar Estudiante',
                        onClick: (event,rowData)=> console.log(event, rowData.id)
                    }
                ]}        
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions: 'Acciones'
                    }
                }}
           />
           <div>{StudentDetail(showDetailPrograma, setShowDetailPrograma)}</div>
           <Button onClick={() => handleShowAdd()}>Añadir Estudiante</Button>
           <div>{StudentAddModal(showAddPrograma, setShowAddPrograma)}</div>
        </div>
    )
}
 

export default Primers;
