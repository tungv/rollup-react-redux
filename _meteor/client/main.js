import { initialize } from './bundle';
import './main.html';

Meteor.startup(initialize);

if (module.hot) {
  module.hot.accept('./bundle', () =>
    require('./bundle').initialize()
  );
}
