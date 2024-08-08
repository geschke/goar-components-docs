import DefaultTheme from 'vitepress/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Theme } from 'vitepress'
//import { GoarComponents } from 'goar-components';
import { App } from 'vue';


export default {
  ...DefaultTheme,
  /*async enhanceApp({ app }: {app: App}) {
    if (!import.meta.env.SSR) {
      const GoarComponents = await import('goar-components')
      app.use(GoarComponents)
    }
  }*/

  async enhanceApp({ app }: { app: App }) {
    if (!import.meta.env.SSR) {
      const module = await import('goar-components');
      const GoarComponents = module.GoarComponents; //was: .default;

      
      //console.log('GoarComponents:', GoarComponents);
      if (GoarComponents && typeof GoarComponents.install === 'function') {
        app.use(GoarComponents);
      } // else fail silently 
      /*else {
        console.error('GoarComponents does not have an install method');
      }*/
    }
  }
  /*enhanceApp({ app }) {
    //app.use(GoarComponents);
    if (typeof document !== 'undefined') {
      app.use(GoarComponents);
      //import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  },*/
} satisfies Theme;
