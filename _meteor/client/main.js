import 'react-hot-loader/patch'
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Template } from 'meteor/templating';

import './main.html';
import { ReactRoot } from './bundle';

function renderRoot(component = ReactRoot) {
  ReactDOM.render(<AppContainer component={component} />, document.getElementById('root'));
}

Meteor.startup(renderRoot);

if (module.hot) {
  module.hot.accept('./bundle', () => renderRoot(require('./bundle').ReactRoot));
}
