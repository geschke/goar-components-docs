# Installation

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Step 1: Install goar-components](#step-1-install-goar-components)
  - [Optional: Install Bootstrap and Bootstrap Icons](#optional-install-bootstrap-and-bootstrap-icons)
  - [Step 2: Setup in Your Vue Project](#step-2-setup-in-your-vue-project)
- [Notes](#notes)

## Installation

To use `goar-components` in your Vue.js project, follow these step-by-step instructions.

### Prerequisites

- **Vue.js**: Ensure you have a Vue.js project set up (preferably Vue 3).
- **Node.js and npm**: Make sure you have Node.js and npm installed.

### Step 1: Install goar-components

Install `goar-components` via npm:

```bash
npm install goar-components
```

### Optional: Install Bootstrap and Bootstrap Icons

**Note:** `goar-components` relies on Bootstrap and Bootstrap Icons for styling and icons. If these are not already installed in your project, proceed with the following steps. If you have them installed, you can skip to [Step 2](#step-2-setup-in-your-vue-project).

#### Install Bootstrap

```bash
npm install bootstrap
```

#### Install Bootstrap Icons

```bash
npm install bootstrap-icons
```

### Step 2: Setup in Your Vue Project

Now, import and register `goar-components` in your `main.js` or `main.ts` file.

#### Import and Register goar-components

```javascript
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';

import { GoarComponents } from 'goar-components';

const app = createApp(App);

app.use(GoarComponents);

app.mount('#app');
```

#### Import Bootstrap and Bootstrap Icons CSS (if installed)

If you installed Bootstrap and Bootstrap Icons in the optional step above (or if they are not already imported in your project), add the following import statements:

```javascript
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
```

Place these imports at the top of your `main.js` or `main.ts` file, before your own global styles, so you can override Bootstrap styles if needed.

#### Complete Example of main.js/main.ts

Your `main.js` or `main.ts` file might look like this:

```javascript
import { createApp } from 'vue';
import App from './App.vue';

import { GoarComponents } from 'goar-components';

// Optional: Import Bootstrap and Bootstrap Icons CSS if not already included
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import your global styles after Bootstrap CSS
import './assets/main.css';

const app = createApp(App);


// Register goar-components
app.use(GoarComponents);

app.mount('#app');
```

**Explanation:**

- **Import and Register goar-components:**

  ```javascript
  import { GoarComponents } from 'goar-components';

  app.use(GoarComponents);
  ```

  This registers all components from `goar-components` globally in your Vue application.

- **Import Bootstrap and Bootstrap Icons CSS:**

  ```javascript
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  ```

  This ensures that Bootstrap styles and icons are available throughout your application.

- **Import Your Global Styles:**

  Place your own global CSS imports after Bootstrap's CSS to allow your styles to override Bootstrap defaults if needed.

## Notes

- **Bootstrap and Bootstrap Icons Dependencies:**

  - `goar-components` depends on Bootstrap and Bootstrap Icons for styling and icons.
  - If your project already includes Bootstrap and Bootstrap Icons, you can skip the optional installation step and the import statements for their CSS files.

- **Version Compatibility:**

  - Ensure that the versions of Bootstrap and Bootstrap Icons in your project are compatible with `goar-components`.
  - It's recommended to use the latest stable versions unless specified otherwise.

- **Including Bootstrap JavaScript (Optional):**

  - If you plan to use Bootstrap's JavaScript components (like modals, tooltips, etc.), you may need to include Bootstrap's JavaScript bundle:

    ```javascript
    // Import Bootstrap's JavaScript bundle if needed
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    ```

    Include this in your `main.js` or `main.ts` if required.

- **Customizing Bootstrap:**

  - If you need to customize Bootstrap's default styles, consider importing Bootstrap's Sass source files and overriding variables before compiling. This allows you to tailor Bootstrap to your project's needs.
