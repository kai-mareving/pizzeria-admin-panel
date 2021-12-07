import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Container from '@material-ui/core/Container';
import Hero from '../../layout/Hero/Hero';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const Login = (props) => {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.component}>
      <Hero titleText={props.title} imageSrc='https://i.imgur.com/liX8i3b.jpg' />
      <Paper className={styles.panelxs} elevation={24}>
        <Container maxWidth='lg' className={styles.container}>
          <FormControl className={styles.login}>
            <InputLabel htmlFor='input-with-icon-login'>Login</InputLabel>
            <Input
              id='input-with-icon-adornment'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton>
                    <AccountCircle />
                  </ IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Container>
        <Container maxWidth='lg' className={styles.container}>
          <FormControl>
            <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
            <Input
              id='standard-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Container>
        <Container className={styles.container}>
          <Button className={styles.input} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`}>Login</Button>
        </Container>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  title: PropTypes.string,
};
Login.defaultProps = {
  title: 'Login view',
};

export default Login;
