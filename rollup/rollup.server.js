import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/server.main.js',
  format: 'es6',
  plugins: [ json(), babel() ],
  dest: '_meteor/server/bundle.js'
};
