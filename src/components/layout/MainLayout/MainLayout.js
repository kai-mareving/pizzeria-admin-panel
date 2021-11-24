import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const MainLayout = ({children}) => (
  <div className='MainLayout'>
    <AppBar>
      <Toolbar>
        <PageNav />
      </Toolbar>
    </AppBar>
    <main>
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
