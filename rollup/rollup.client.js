import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

import { readFileSync } from 'fs';
const packages = JSON.parse(readFileSync(__dirname + '/../_meteor/package.json', 'utf8'));
const dependencies = Object.keys(packages.dependencies);

export default {
  entry: 'src/client.main.js',
  format: 'es6',
  plugins: [
    nodeResolve({
      skip: dependencies
    }),
    json(),
    babel()
  ],
  dest: '_meteor/client/bundle.js'
};
