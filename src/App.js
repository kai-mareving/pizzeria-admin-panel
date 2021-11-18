import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import styles from './styles/SwitchWrapper.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
// import Kitchen from '../src/components/views/Kitchen/Kitchen';
// import Login from '../src/components/views/Login/Login';
// import Tables from '../src/components/views/Tables/Tables';
// import Waiter from '../src/components/views/Waiter/WaiterContainer';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
      <AnimatedSwitch
        atEnter={{  opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
          <Route exact path='/' component={Dashboard} />
          {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Tables} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Tables} /> */}

          {/* <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Tables} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Tables} /> */}

          {/* <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Waiter} /> */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Waiter} /> */}
        </ AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
