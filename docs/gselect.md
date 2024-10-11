# GSelect Component Documentation

The **GSelect** component is part of the `goar-components` library. It is a custom Vue.js select component designed to provide a more visually appealing alternative to the standard HTML `<select>` element. This component allows users to select an option from a list with a modern interface, supporting features like loading indicators and empty state messages.

## Table of Contents

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Slots](#slots)
- [Events](#events)
- [Interfaces](#interfaces)
  - [GSelectOption](#gselectoption)
- [Utility Functions](#utility-functions)
  - [normalizeKeys](#normalizekeys)
- [Notes](#notes)

## Introduction

The **GSelect** component provides a customizable and stylized alternative to the native `<select>` element. It displays options in a scrollable list with the ability to select or deselect an item. The component supports keyboard navigation and includes optional features like loading indicators and custom empty state messages.

## Basic Usage

To use the **GSelect** component, import it from `goar-components` and include it in your template. Here's a minimal example:

```vue
<template>
  <GSelect :options="options" v-model="selectedValue" :height="150" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GSelect } from 'goar-components';
import type { GSelectOption } from 'goar-components';

const options = ref<GSelectOption[]>([
  { key: 'option1', value: 'Option 1' },
  { key: 'option2', value: 'Option 2' },
  { key: 'option3', value: 'Option 3' },
]);

const selectedValue = ref<string>('');
</script>
```

In this example:

- **Options**: Define the selectable options using the `options` prop. Each option has a `key` (unique identifier) and a `value` (displayed text).

- **v-model**: Use `v-model` to bind the selected value to a variable in your component.

- **Height**: Optionally set the `height` prop to control the maximum height of the component.

## Props

The **GSelect** component accepts the following props:

| Prop            | Type                      | Default | Description                                                                                      |
| --------------- | ------------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `modelValue`    | `string`                  | `''`    | The currently selected key. Used with `v-model` for two-way binding.                             |
| `name`          | `string`                  | `''`    | The name attribute for the component (optional).                                                 |
| `height`        | `number`                  | `200`   | The maximum height of the component in pixels.                                                   |
| `options`       | `GSelectOption[]`         | `[]`    | An array of option objects available for selection.                                              |
| `allowDeselect` | `boolean`                 | `true`  | Allows the user to deselect the currently selected option if set to `true`.                      |
| `showLoading`   | `boolean`                 | `false` | Displays a loading indicator when `loading` is `true`.                                           |
| `loading`       | `boolean`                 | `false` | Indicates whether data is currently loading.                                                     |
| `showEmpty`     | `boolean`                 | `true`  | Displays an empty state message when `options` array is empty and `loading` is `false`.          |

### Prop Descriptions

- **`modelValue`**: The key of the currently selected option. Use `v-model` to create a two-way data binding with your component's data.

- **`name`**: An optional name attribute for the component, useful when integrating with forms.

- **`height`**: Sets the maximum height of the component. If the content exceeds this height, the component becomes scrollable.

- **`options`**: An array of options that the user can select from. Each option must have a `key` and a `value`.

- **`allowDeselect`**: If `true`, the user can deselect the selected option by clicking on it again.

- **`showLoading`**: When `true` and `loading` is `true`, a loading spinner is displayed to indicate that data is being fetched.

- **`loading`**: Controls whether the loading spinner is displayed (in combination with `showLoading`).

- **`showEmpty`**: If `true` and the `options` array is empty (and `loading` is `false`), an empty state message is displayed.

## Slots

The **GSelect** component provides slots for customizing the loading and empty state messages.

### `tmplLoading` Slot

Customize the loading template displayed when `loading` is `true` and `showLoading` is `true`.

```vue
<template #tmplLoading>
  <!-- Custom loading indicator -->
  <div class="text-center">
    <i class="bi bi-hourglass-split"></i> Loading options...
  </div>
</template>
```

### `tmplEmpty` Slot

Customize the empty state message displayed when the `options` array is empty and `showEmpty` is `true`.

```vue
<template #tmplEmpty>
  <!-- Custom empty state message -->
  <div class="text-center">
    <i class="bi bi-inbox"></i> No options available.
  </div>
</template>
```

## Events

The **GSelect** component can emit the following events:

- **`update:modelValue`**: Emitted when the selected option changes.

  - **Payload**: The new selected key as a `string`.

- **`input`**: Emitted when the selected option changes (alias for `update:modelValue` for compatibility).

  - **Payload**: The new selected key as a `string`.

- **`change`**: Emitted when the selection changes.

  - **Payload**: None.

- **`blur`**: Emitted when the component loses focus.

  - **Payload**: The `FocusEvent` object.

**Note**: When using `v-model`, the `update:modelValue` event is automatically handled.

## Interfaces

### GSelectOption

Defines the structure of the options used in the **GSelect** component.

```typescript
export interface GSelectOption {
  key: string;
  value: any;
}
```

- **`key`**: A unique identifier for the option. This is what is used internally and emitted as the `modelValue`.

- **`value`**: The display value shown to the user in the list.

## Utility Functions

### normalizeKeys

The `normalizeKeys` function is a utility provided to help you transform your data arrays into the format required by the **GSelect** component's `options` prop.

#### Parameters

- **`inputArray`**: An array of objects containing your raw data.

- **`keyName`**: The property name in your data objects that should be used as the `key` in the options.

- **`valueParameter`**: Either a string specifying the property name to use as the `value`, or a function that takes a data object and returns a string.

#### Returns

- An array of `GSelectOption` objects formatted for use in the `options` prop.

#### Usage Example in a Template

You can use `normalizeKeys` directly within your template to prepare the `options` prop, especially when your data arrays have different property names.

```vue
<template>
  <GSelect
    name="inputCollection"
    v-model="inputCollection"
    :options="GSelect.normalizeKeys(collections, 'ID', 'Collection')"
    :height="200"
    :showEmpty="false"
    :showLoading="true"
    :loading="loadingCollections"
  >
  </GSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GSelect } from 'goar-components';

const collections = ref([
  { ID: '1', Collection: 'Collection A' },
  { ID: '2', Collection: 'Collection B' },
  { ID: '3', Collection: 'Collection C' },
]);

const inputCollection = ref<string>('');

const loadingCollections = ref<boolean>(false);
</script>
```

In this example:

- **`collections`**: An array of objects where the identifiers are not `key` and `value`, but `ID` and `Collection`.

- **Using `normalizeKeys` in the Template**: We call `GSelect.normalizeKeys(collections, 'ID', 'Collection')` directly in the template to transform the data into the format expected by `options`.

- **Result**: This allows you to pass any array with arbitrary property names and map them to the `key` and `value` required by the **GSelect** component.

#### Explanation

- **`collections`**: Your data array with custom property names (`ID` and `Collection`).

- **`GSelect.normalizeKeys`**: A static method provided by the **GSelect** component that you can use directly in your template.

- **Parameters**:
  - `'ID'`: Specifies that the `ID` property of each object should be used as the `key`.
  - `'Collection'`: Specifies that the `Collection` property should be used as the `value`.

- **Usage in Template**: By using `GSelect.normalizeKeys` in the `:options` binding, you ensure that the data is transformed every time the `collections` data changes.

#### Note

Make sure that you have access to the `GSelect` component in your template scope to use `GSelect.normalizeKeys`. If not, you can import the `normalizeKeys` function directly:

```typescript
import { normalizeKeys } from 'goar-components';
```

And then use it in your template:

```vue
<template>
  <GSelect
    :options="normalizedOptions"
    ...
  >
  </GSelect>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { GSelect, normalizeKeys } from 'goar-components';

const collections = ref([
  { ID: '1', Collection: 'Collection A' },
  { ID: '2', Collection: 'Collection B' },
  { ID: '3', Collection: 'Collection C' },
]);

const normalizedOptions = computed(() =>
  normalizeKeys(collections.value, 'ID', 'Collection')
);
</script>
```

## Notes

- **Simplifying Data Preparation**: The `normalizeKeys` function is especially useful when your data does not match the expected `GSelectOption` format. It allows you to quickly map your data to the required structure without modifying your original data.

- **Flexibility**: By accepting either a string or a function for the `valueParameter`, you have flexibility in defining how the display value is derived from your data objects.

- **Importing normalizeKeys**: Ensure you import `normalizeKeys` from `goar-components`:

  ```typescript
  import { normalizeKeys } from 'goar-components';
  ```

  Or access it via `GSelect.normalizeKeys` if it's exposed that way.

- **TypeScript Support**: The function works seamlessly with TypeScript, helping to maintain type safety in your application.

- **Using with Data Fetching**: When fetching data asynchronously, you can use `normalizeKeys` to transform the fetched data before passing it to the **GSelect** component.

- **Further Examples**: For more examples on how to use `normalizeKeys` with **GSelect**, please refer to the examples page.
