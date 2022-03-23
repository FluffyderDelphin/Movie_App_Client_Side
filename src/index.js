import React from 'react';
import ReactDom from 'react-dom';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import moviesApp from './redux/reducers/reducer';

import Mainview from './components/main-view/main-view';

import { devToolsEnhancer } from 'redux-devtools-extension';

import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

class Movieapp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Mainview />
      </Provider>
    );
  }
}
const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(Movieapp), container);
