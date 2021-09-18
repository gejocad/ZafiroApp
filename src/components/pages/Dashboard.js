import React from 'react';
import SmallBox from '../small-box/SmallBox';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={150}
                        title="Estudiantes Registrados"
                        type="info"
                        icon="ion-android-people"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={53}
                        title="Certificados impresos"
                        type="warning"
                        icon="ion-android-document"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={44}
                        title="Estudiantes Egresados"
                        type="success"
                        
                        icon="ion-android-contact"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={65}
                        title="Ajustes de certificados"
                        type="danger"
                        icon="ion-android-options"
                        navigateTo="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
