import React, { useState } from 'react';
import MaterialTable from 'material-table'
/*{import {makeStyles} from '@material-ui/core/styles';}*/
import StudentDetail from '@components/pages/modals/StudentDetail';
import { useDispatch, useSelector } from 'react-redux';
import { activeStudents, Delete } from '@actions/studentAction';

/*{const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));}*/
  

  const Listado = ({isActive}) => {

    const dispatch = useDispatch()
    const [showDetail, setShowDetail] = useState(false)
    const { student } = useSelector(state => state.student)
    

    const handleShowDetail = (event, data) => {

        dispatch(activeStudents(data.id, data))
        setShowDetail(true)
    }
    
    const handleDelete = (event, id) => {
        dispatch(Delete(id))
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
            field: 'nombre'
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
                        onClick: (event, rowData) => {handleDelete(event, rowData.id)}
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
        </div>
    )
}

export default Listado;