import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import ReactDOM from 'react-dom';
import { ReactRoot } from './bundle';

Template.reactRoot.onCreated(() => {
  const root = document.getElementById('reactRoot');
  ReactDOM.render(<ReactRoot />, root);
});
