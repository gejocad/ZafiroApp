import React, { useState } from 'react';
import MaterialTable from 'material-table';
/*{import {makeStyles} from '@material-ui/core/styles';}*/
import StudentDetailSem3 from '@components/pages/modals/StudentDetailSem3';
import StudentAddModal from '@components/pages/modals/AddStudent';
import { useDispatch, useSelector } from 'react-redux';
import { activeStudents } from '@actions/studentAction';

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
  

  const Tercers = ({isActive}) => {

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
            title: 'Nota 1',
            field: 'notaS31'
        },
        {
            title: 'Nota 2',
            field: 'notaS32'
        },
        {
            title: 'Nota 3',
            field: 'notaS33'
        },
        {
            title: 'Nota 4',
            field: 'notaS34'
        },
        {
            title: 'Nota 5',
            field: 'notaS35'
        },
        {
            title: 'Nota 6',
            field: 'notaS36'
        },
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
           <div>{StudentDetailSem3(showDetail, setShowDetail)}</div>
           <div>{StudentAddModal(showAddStudent, setShowAddStudent)}</div>
        </div>
    )
}

export default Tercers;
