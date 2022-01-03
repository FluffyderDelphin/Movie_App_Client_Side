import React from 'react';
import ReactDOM from 'react-dom';
import Mainview from './components/main-view/main-view';

import './index.scss';

class Movieapp extends React.Component {
  render() {
    return <Mainview />;
  }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(Movieapp), container);
