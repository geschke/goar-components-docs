import { defineConfig } from 'vitepress'
import markdownItRegex from 'markdown-it-regex'

//import { resolve } from 'path';
//import vue from '@vitejs/plugin-vue'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "goar-components",
  description: "goar-components Documentation",
  appearance: false,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/goar-components_logo_01.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'GToast Test', link: '/gtoast'}
    ],
  

    sidebar: [
      {        
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'GSelect', link: '/gselect' },

          { text: 'GTable', link: '/gtable' },
          { text: 'GToast', link: '/gtoast' },
          
        ]
      },
      {        
        text: 'Examples',
        items: [
          { text: 'GSelect', link: '/gselect-examples' },
          { text: 'GTable', link: '/gtable-examples' },
          { text: 'GToast', link: '/gtoast-examples' },
          
        ]
      },

      {        
        text: 'temp',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geschke/goar-components' },
      { icon: 'twitter', link: 'https://x.com/geschke' }
    ],
    
  },
  markdown: {
    
    theme: 'github-light',
    lineNumbers: true,

    // does not work, todo later! but something works, like replacing "table" without any < chars
    config(md) {
      md.use(markdownItRegex.default, {
        name: 'bs-table',
        regex: /<table>/,
        replace: (match) => {
          return `<table class="table table-striped>"`
        }
      })
    }
    /*config(md) {
      md.renderer.rules.emoji = function (token, idx) {
        return `<i class="e1a-${token[idx].markup}"></i>`
      }
    }*/
    /*config: (md) => {

      md.use(markdownItRegex, {
        // Suche nach öffnendem <table> Tag ohne Klassen
        regex: /<table>/g,
        replace: () => {
          // Ersetze es mit <table class="table table-striped">
          return '<table class="table table-striped">'
        }
      })
    }*/
    
  },
  vite: {
    ssr: {
      //noExternal: ['bootstrap'], // Stellen Sie sicher, dass Bootstrap nicht externalisiert wird
      //target: 'webworker'
    },
    //plugins: [vue()],
    //build: {
    //  rollupOptions: {
    //    output: {
    //      globals: {
    //        vue: 'Vue'
    //      }
    //    }
    //  }
    //}
  }
})

