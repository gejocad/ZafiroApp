import React, { useState } from 'react';
import MaterialTable from 'material-table';
/*{import {makeStyles} from '@material-ui/core/styles';}*/
import StudentDetail from '@components/pages/modals/StudentDetail';
import StudentAddModal from '@components/pages/modals/AddStudent';
import { useDispatch, useSelector } from 'react-redux';
import { activePrograma } from '@actions/programaAction';


const Listado = ({isActive}) => {

    const dispatch = useDispatch()
    const [showDetailPrograma, setShowDetailPrograma] = useState(false)
    const [showAddPrograma, setShowAddPrograma] = useState(false)
    const { programa } = useSelector(state => state.programa)
    

    const handleShowDetailPrograma = (event, data) => {

        dispatch(activePrograma(data.id, data))
        setShowDetailPrograma(true)
    }

    const columnas = [
        
        {
            title: 'Nombre',
            field: 'nombre',
            type: 'text',
            align: 'center'
        },
        {
            title: 'Licencia',
            field: 'licencia'
        },
        {
            title: 'Decreto',
            field: 'decreto'
        },
        {
            title: 'Resolucion',
            field: 'resolucion'
        }
    ];

   

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            
           <MaterialTable
                columns={columnas}
                data={programa}
                title='Programas educativos'  
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
           <div>{StudentAddModal(showAddPrograma, setShowAddPrograma)}</div>
        </div>
    )
}
 

export default Listado;
