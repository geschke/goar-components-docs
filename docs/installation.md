# Installation

`goar-components` is a Vue 3 component library built on top of Bootstrap 5.

It does **not bundle its dependencies**. The host application must provide Vue, Pinia, Bootstrap, and Bootstrap Icons.



## Requirements

* Vue 3
* Pinia
* Bootstrap 5
* Bootstrap Icons
* Node.js (recommended ≥ 18)



## Install

Install the library together with its peer dependencies:

```bash
npm install goar-components vue pinia bootstrap bootstrap-icons @popperjs/core
```

If your project already includes some of these dependencies, you can omit them.



## Setup

Register Pinia and `goar-components` in your application entry file (`main.ts` or `main.js`).

```ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import { GoarComponents } from 'goar-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(createPinia());
app.use(GoarComponents);

app.mount('#app');
```

All components are now globally available in your Vue application.



## Using Individual Components (Optional)

You can also import components individually if you prefer not to register the plugin globally.

```ts
import { GTable } from 'goar-components';
```



## Notes

### Dependency Handling

`goar-components` expects its peer dependencies to be installed by the host application.

This approach avoids duplicate framework instances and ensures compatibility with your existing project setup.

### Bootstrap JavaScript (Optional)

If you use Bootstrap components that require JavaScript (for example modals or tooltips), include the Bootstrap bundle:

```ts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### Customizing Bootstrap

If you need to customize Bootstrap styles, consider importing Bootstrap’s Sass sources and overriding variables before compilation. This allows you to tailor Bootstrap to your project requirements.
