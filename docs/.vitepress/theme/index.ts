import DefaultTheme from 'vitepress/theme';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GoarComponents } from 'goar-components';


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(GoarComponents);
    /*if (typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }*/
  },
};
