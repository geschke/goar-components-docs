# GToast 


GToast is a customizable toast notification component that integrates with Bootstrap's toast functionality.

## Features

- Customizable placement of toasts
- Limit on the maximum number of toasts displayed
- Auto-hide functionality
- Customizable appearance through CSS classes

## Usage

```vue
<template>
  <GToast ref="toastRef" :placement="'top-0 end-0'" :max-number="3" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GToast, GToastSuccess } from 'goar-components';

const toastRef = ref();

// To add a toast
toastRef.value.addToast({
  ...GToastSuccess,
  title: 'Success!',
  content: 'Operation completed successfully.',
});
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | string | 'bottom-0 end-0' | Position of the toast container, just use placement classes from Bootstrap |
| `maxNumber` | number | 5 | Maximum number of toasts to display (0 disables the limit) |

## Methods

- `addToast(toast: GToastContent)`: Adds a new toast to the display

## Toast Content Parameters (GToastContent)

When adding a new toast, you can customize its appearance and behavior using the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | string | (Optional) Unique identifier for the toast |
| `title` | string | Title of the toast |
| `content` | string | (Optional) Main content of the toast |
| `secondaryContent` | string | (Optional) Additional content, typically used for timestamps |
| `delay` | number | (Optional) Time in milliseconds before the toast auto-hides (default: 5000) |
| `animation` | boolean | Whether to animate the toast (default: true) |
| `autohide` | boolean | Whether the toast should automatically hide (default: true) |
| `toastClasses` | string | CSS classes for the entire toast container |
| `headerClasses` | string | CSS classes for the toast header |
| `bodyClasses` | string | CSS classes for the toast body |
| `closeButtonClasses` | string | CSS classes for the close button |
| `secondaryContentClasses` | string | CSS classes for the secondary content |

## Predefined Toast Styles

GToast comes with predefined styles for different types of notifications:

- `GToastSuccess`: Green background for success messages
- `GToastWarning`: Yellow background for warning messages
- `GToastDanger`: Red background for error messages
- `GToastInfo`: Blue background for informational messages

These can be imported and used as base styles for your toasts.

## Customization

You can customize the appearance of toasts by providing CSS classes through the `GToastContent` parameters. For example:

```typescript
toastRef.value.addToast({
  ...GToastSuccess,
  title: 'Custom Success',
  content: 'This is a custom styled success message',
  toastClasses: 'my-custom-toast',
  headerClasses: 'my-custom-header',
  bodyClasses: 'my-custom-body'
});
```





<ExampleGToast />

<script setup>
//import ExampleGToast from './.vitepress/components/ExampleGToast.vue';

/*import { onMounted } from 'vue'

onMounted(() => {
  import('./lib-that-access-window-on-import').then((module) => {
    // use code
  })
})
*/
import { defineClientComponent } from 'vitepress'

const ExampleGToast = defineClientComponent(() => {
  return import('./.vitepress/components/ExampleGToast.vue')
})

</script>
