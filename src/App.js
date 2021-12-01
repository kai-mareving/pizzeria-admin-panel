import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import styles from './styles/SwitchWrapper.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import TablesBookingNew from '../src/components/views/Tables/TablesBookingNew/TablesBookingNew';
import TablesBookingEdit from '../src/components/views/Tables/TablesBookingEdit/TablesBookingEdit';
import TablesEventNew from './components/views/Tables/TablesEventNew/TablesEventNew';
import TablesEventEdit from './components/views/Tables/TablesEventEdit/TablesEventEdit';
import Waiter from '../src/components/views/Waiter/Waiter';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
//? Material UI styles are added after our predefined styles so they have a higher importance
import { StylesProvider } from '@material-ui/core/styles'; //! MUI Styles bypass
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3b3b3b' },
    // secondary: { main: '#284C6F' },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <AnimatedSwitch atEnter={{  opacity: 0 }} atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }} className={styles.switchWrapper}>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />

              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingEdit} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventEdit} />

              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Waiter} />

              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </ AnimatedSwitch>
          </ MainLayout>
        </ThemeProvider>
      </ StylesProvider>
    </ BrowserRouter>
  );
}

export default App;
