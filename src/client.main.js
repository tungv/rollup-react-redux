import { version } from '../package.json';

const message = `current version is ${version}`;
export default () => console.log( message );

import React from 'react';

export const ReactRoot = () => (
  <div>Hello</div>
);
