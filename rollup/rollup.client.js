import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/client.main.js',
  format: 'cjs',
  plugins: [ json(), babel() ],
  dest: '_meteor/client/bundle.js'
};
