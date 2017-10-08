import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Log from './screen/LogInPageHOC';

export default class App extends React.Component {

   constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  
  render() {
    return (
    <Provider store={store}>
      <Log />
    </Provider>
  );
  }
}
