import React, { useState } from 'react';
import MaterialTable from 'material-table'
/*{import {makeStyles} from '@material-ui/core/styles';}*/
import StudentDetail from '@components/pages/modals/StudentDetail';
import StudentAddModal from '@components/pages/modals/AddStudent';
import { useDispatch, useSelector } from 'react-redux';
import { activeStudents } from '@actions/studentAction';


const Listado = ({isActive}) => {

    const dispatch = useDispatch()
    const [showDetail, setShowDetail] = useState(false)
    const [showAddStudent, setShowAddStudent] = useState(false)
    const { student } = useSelector(state => state.student)
    

    const handleShowDetail = (event, data) => {

        dispatch(activeStudents(data.id, data))
        setShowDetail(true)
    }

    const columnas = [
        
        {
            title: 'Documento',
            field: 'document',
            type: 'numeric',
            align: 'center'
        },
        {
            title: 'Estudiante',
            field: 'fullName'
        },
        {
            title: 'Correo',
            field: 'email'
        },
        {
            title: 'Programa',
            field: 'prog'
        }
    ];

   

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            
           <MaterialTable
                columns={columnas}
                data={student}
                title='Estudiantes'  
                actions={[
                    {
                        icon: 'Detail',
                        tooltip: 'Detalles',
                        onClick: (event, rowData) => {handleShowDetail(event, rowData)}
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
           <div>{StudentDetail(showDetail, setShowDetail)}</div>
           <div>{StudentAddModal(showAddStudent, setShowAddStudent)}</div>
        </div>
    )
}
 

export default Listado;
