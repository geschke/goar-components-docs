# GSelect

A customizable and user-friendly select box component for Vue.js, designed to offer a more aesthetically pleasing alternative to the standard HTML select element. It supports configurable height and selection features.

## Features

- Customizable height
- Keyboard navigation support
- Deselect option
- Fully supports Bootstrap 5 design and utilizes Bootstrap CSS framework resources exclusively


## Basic Usage

Here is a simple example of how to use the `GSelect` component in your Vue.js project.

```vue
<template>
  <div>
    <h2>Basic Select Box Example</h2>
    <GSelect
      v-model="selectedValue"
      :options="options"
      name="basicSelect"
      :height="150"
    />
    <p>Selected Value: {{ selectedValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GSelect from 'goar-components/GSelect';

const selectedValue = ref<string>('');
const options = ref<Array<{ key: string; value: string }>>([
  { key: '1', value: 'Option 1' },
  { key: '2', value: 'Option 2' },
  { key: '3', value: 'Option 3' }
]);
</script>
```

## Features and Props

| Prop          | Type                 | Default | Description                                                              |
|---------------|----------------------|---------|--------------------------------------------------------------------------|
| `modelValue`  | `String`             | `''`    | The currently selected value                                             |
| `name`        | `String`             | `''`    | The name attribute for the select box                                    |
| `height`      | `Number`             | `200`   | The maximum height of the select box (in pixels)                         |
| `options`     | `Array<GSelectOption>`| `[]`    | The options to display in the select box                                 |
| `allowDeselect`| `Boolean`           | `true`  | Whether to allow deselection of the selected option                      |

## Events

`GSelect` emits the following events:

- **update:modelValue**: Emitted when the selected value changes.
- **input**: Emitted when an input event occurs.
- **blur**: Emitted when the select box loses focus.
- **change**: Emitted when the selected option changes.

#### Types

The `GSelect` component uses the following types:

```typescript
interface GSelectOption {
  key: string;
  value: any;
}
```
