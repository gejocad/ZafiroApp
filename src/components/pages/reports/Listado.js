import React, { useState } from 'react';
import MaterialTable from 'material-table'
import {Button} from '@material-ui/core';
import StudentDetail from '@components/pages/modals/StudentDetail';
import StudentAddModal from '@components/pages/modals/AddStudent';


const Listado = ({isActive}) => {
   
    const [showDetail, setShowDetail] = useState(false)
    const [showAddStudent, setShowAddStudent] = useState(false)
    const [user, setUser] = useState({})

    const handleShowDetail = (event, user1) => {
        setUser(user1) 
        setShowDetail(true)
    }
    const handleShowAdd = () => {
        console.log("ok")
        setShowAddStudent(true)
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
            field: 'student'
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

    const data = [
        {document: 1092006788, student: 'Wildelmy Jose Colina', email: 'wilcol@gmail.com', prog: 'Desarrollo Web'},
        {document: 1065815899, student: 'Gerald Jose Castillo', email: 'geocad@gmail.com', prog: 'Desarrollo Web'},
        {document: 1092314765, student: 'Jose Angel Agelvis', email: 'agelvisangel@gmail.com', prog: 'Intesivo de Manicure'},
        {document: 1065800989, student: 'Pedro Jose Zapata', email: 'pedrozap1@gmail.com', prog: 'Ingles'},
        {document: 1092142726, student: 'Petro Porfirio Chavez', email: 'elpetro123ya@gmail.com', prog: 'Estudios Politicos'},
        {document: 1065455780, student: 'Claudia Pezlo', email: 'pezloclau@gmail.com', prog: 'Resposteria'}
    ];

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
           <MaterialTable
                columns={columnas}
                data={data}
                title='Estudiantes'  
                actions={[
                    {
                        icon: 'detail',
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
           <div>{StudentDetail(showDetail, setShowDetail, user)}</div>
           <Button onClick={() => handleShowAdd()}>Añadir Estudiante</Button>
           <div>{StudentAddModal(showAddStudent, setShowAddStudent)}</div>
        </div>
    )
}
 
export default Listado;
