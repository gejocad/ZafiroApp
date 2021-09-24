import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '@components/pages/Dashboard';
import Programa from '@components/pages/program/Program';
import Reporte from '@components/pages/reports/Reports';
import Header from '@components/main/header/Header';
import Footer from '@components/main/footer/Footer';
import MenuSidebar from '@components/main/menu-sidebar/MenuSidebar';
import PageLoading from '@components/page-loading/PageLoading';
import Estudiante from '@components/pages/students/Students'

const Main = () => {
  const [appLoadingState, updateAppLoading] = useState(false);
  const [menusidebarState, updateMenusidebarState] = useState({
    isMenuSidebarCollapsed: false
  });

  const toggleMenuSidebar = () => {
    updateMenusidebarState({
      isMenuSidebarCollapsed: !menusidebarState.isMenuSidebarCollapsed
    });
  };

  useEffect(() => {
    updateAppLoading(true);
    const fetchProfile = async () => {
      try {
        updateAppLoading(false);
      } catch (error) {
        updateAppLoading(false);
      }
    };
    fetchProfile();
    return () => { };
  }, []);

  document.getElementById('root').classList.remove('register-page');
  document.getElementById('root').classList.remove('login-page');
  document.getElementById('root').classList.remove('hold-transition');

  document.getElementById('root').className += ' sidebar-mini';

  if (menusidebarState.isMenuSidebarCollapsed) {
    document.getElementById('root').classList.add('sidebar-collapse');
    document.getElementById('root').classList.remove('sidebar-open');
  } else {
    document.getElementById('root').classList.add('sidebar-open');
    document.getElementById('root').classList.remove('sidebar-collapse');
  }

  let template;

  if (appLoadingState) {
    template = <PageLoading />;
  } else {
    template = (
      <>
        <Header toggleMenuSidebar={toggleMenuSidebar} />

        <MenuSidebar />

                <div className="content-wrapper">
                    <div className="pt-3" />
                    <section className="content">
                        <Switch>
                            <Route exact path="/ZafiroApp" component={Dashboard} />
                            <Route exact path="/programa" component={Programa} />
                            <Route exact path="/students" component={Estudiante} />
                            <Route exact path="/reports" component={Reporte} />
                        </Switch>
                    </section>
                </div>
                <Footer />
                <div
                    id="sidebar-overlay"
                    role="presentation"
                    onClick={toggleMenuSidebar}
                    onKeyDown={() => {}}
                />
            </>
        );
    }

  return <div className="wrapper">{template}</div>;
};

export default Main;
