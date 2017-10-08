import {
  compose,
  withProps,
  withHandlers  
} from 'recompose';

import LogInPage from './LogInPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logIn, logOut } from '../helpers';
import {
  setEmail,
  setPassword,
  setLog
} from '../store/actions';

const withReduxConnect = connect(
  state => ({
    email: state.email,
    password: state.password,
    logged : state.logged        
  }),
  dispatch =>
    bindActionCreators({setEmail, setPassword, setLog}, dispatch),
);


const withLog = withHandlers({
  logInApp: ({ setLog }) => () => {
    setLog(logIn());
  },
  logOutApp: ({ setLog }) => () => {
    setLog(logOut());
  },
});


export default compose(withReduxConnect, withLog)(LogInPage);