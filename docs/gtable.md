# GTable Component Documentation

The **GTable** component is part of the `goar-components` library. It is a customizable Vue.js table component designed to display data in a simple and flexible way. This documentation provides guidance on how to use the **GTable** component in your Vue.js application.

## Table of Contents

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Slots](#slots)
- [Events](#events)
- [Interfaces](#interfaces)
  - [GTableHeader](#gtableheader)
  - [GTableItem](#gtableitem)
- [Notes](#notes)

## Introduction

The **GTable** component provides a straightforward way to display tabular data in your Vue.js applications. It supports features like pagination, expandable rows, checkboxes, and customizable headers. You can use it in its simplest form to display data without any additional complexity or customize it extensively to suit your needs.

## Basic Usage

To use the **GTable** component, import it from `goar-components` and include it in your template. Here's a minimal example:

```vue
<template>
  <GTable :headers="headers" :items="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  { title: 'ID', field: 'id' },
  { title: 'Name', field: 'name' },
]);

const items = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]);
</script>
```

In this example:

- **Headers**: Define the columns of the table using the `headers` prop. Each header has a `title` (displayed in the table header) and a `field` (the key to access the corresponding value in the data items).

- **Items**: Provide the data to display in the table using the `items` prop. Each item is an object with keys corresponding to the `field` values in the headers.

For more comprehensive examples, please refer to the examples page.

## Props

The **GTable** component accepts the following props:

| Prop                  | Type                           | Default                  | Description                                                                                                                                                 |
| --------------------- | ------------------------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`             | `GTableHeader[]`               | `[]`                     | An array of header objects defining the table columns.                                                                                                      |
| `items`               | `GTableItem[]`                 | `[]`                     | An array of data objects to display in the table.                                                                                                           |
| `classes`             | `string`                       | `''`                     | Additional CSS classes for the `<table>` element.                                                                                                           |
| `bodyClasses`         | `string`                       | `''`                     | CSS classes for the `<tbody>` element.                                                                                                                      |
| `headClasses`         | `string`                       | `''`                     | CSS classes for the `<thead>` element.                                                                                                                      |
| `keyField`            | `string`                       | `''`                     | The unique key field in your data items. If not specified, the index of the item in the array is used as the key.                                           |
| `checkEvent`          | `string`                       | `''`                     | Name of the event to emit when a checkbox is toggled.                                                                                                       |
| `expandEvent`         | `string`                       | `''`                     | Name of the event to emit when an expandable row is toggled.                                                                                                |
| `showLoading`         | `boolean`                      | `false`                  | If `true` and `loading` is `true`, shows a loading indicator when data is being fetched.                                                                    |
| `loading`             | `boolean`                      | `false`                  | Indicates if data is currently loading.                                                                                                                     |
| `showEmpty`           | `boolean`                      | `true`                   | Show a message when there are no data items to display.                                                                                                     |
| `pagination`          | `boolean`                      | `true`                   | Enable or disable pagination.                                                                                                                               |
| `currentPage`         | `number`                       | `1`                      | The current active page number.                                                                                                                             |
| `itemsPerPage`        | `number`                       | `10`                     | Number of items to display per page when pagination is enabled.                                                                                             |
| `maxPageLinks`        | `number`                       | `5`                      | Maximum number of pagination links to display.                                                                                                              |
| `showPageFirstLast`   | `boolean`                      | `false`                  | Show 'First' and 'Last' pagination buttons.                                                                                                                 |
| `showPageIcons`       | `boolean`                      | `false`                  | Use icons instead of text for pagination controls.                                                                                                          |
| `pageStringFirst`     | `string`                       | `'First'`                | Text for the 'First' page button.                                                                                                                           |
| `pageStringLast`      | `string`                       | `'Last'`                 | Text for the 'Last' page button.                                                                                                                            |
| `pageStringPrev`      | `string`                       | `'Previous'`             | Text for the 'Previous' page button.                                                                                                                        |
| `pageStringNext`      | `string`                       | `'Next'`                 | Text for the 'Next' page button.                                                                                                                            |
| `paginationAlignment` | `string`                       | `'justify-content-end'`  | CSS classes to align pagination controls.                                                                                                                   |
| `paginationSize`      | `string`                       | `''`                     | Size of pagination controls (`'pagination-lg'` or `'pagination-sm'`).                                                                                       |

### Prop Descriptions

- **`headers`**: An array of `GTableHeader` objects defining the table columns.

- **`items`**: An array of `GTableItem` objects representing the data to display in the table.

- **`classes`**: Additional CSS classes to apply to the `<table>` element.

- **`bodyClasses`**: CSS classes to apply to the `<tbody>` element.

- **`headClasses`**: CSS classes to apply to the `<thead>` element.

- **`keyField`**: Specifies the field in your data items that should be used as a unique key. If not provided, the index of the item in the array is used as the key.

- **`checkEvent`**: The name of the event to emit when a checkbox in the table is toggled.

- **`expandEvent`**: The name of the event to emit when an expandable row is toggled.

- **`showLoading`**: If set to `true` and `loading` is `true`, a loading indicator is shown when data is being fetched.

- **`loading`**: Indicates whether data is currently being loaded.

- **`showEmpty`**: If `true`, displays a message when there are no data items to show.

- **`pagination`**: Enables or disables pagination. When `true`, pagination controls are displayed.

- **`currentPage`**: The current page number when pagination is enabled.

- **`itemsPerPage`**: The number of items to display per page when pagination is enabled.

- **`maxPageLinks`**: The maximum number of pagination links to display.

- **`showPageFirstLast`**: If `true`, 'First' and 'Last' buttons are shown in the pagination controls.

- **`showPageIcons`**: If `true`, uses icons instead of text for pagination controls.

- **`pageStringFirst`**, **`pageStringLast`**, **`pageStringPrev`**, **`pageStringNext`**: Custom text for pagination buttons.

- **`paginationAlignment`**: CSS classes to align the pagination controls.

- **`paginationSize`**: Size of the pagination controls. Accepts Bootstrap pagination size classes like `'pagination-lg'` or `'pagination-sm'`.

## Slots

The **GTable** component provides slots for customizing the rendering of table cells and messages.

### Custom Cell Content Slots

You can customize the content of table cells by using named slots. To use this feature:

1. **Specify the slot name in the header definition**: In your `headers` array, set the `field` property to correspond with the slot name you want to use for that column.

2. **Define the slot in your template**: Use the `<template>` tag with the `#` syntax followed by the slot name. The slot provides access to the data for the current row.

For detailed examples on how to use custom cell content slots, please refer to the examples page.

### `tmplLoading` Slot

Customize the loading template displayed when `loading` is `true` and `showLoading` is `true`.

```vue
<template #tmplLoading>
  <!-- Custom loading indicator -->
  <div>Loading data, please wait...</div>
</template>
```

### `tmplEmpty` Slot

Customize the empty data message displayed when there are no items and `showEmpty` is `true`.

```vue
<template #tmplEmpty>
  <!-- Custom empty data message -->
  <div>No records found.</div>
</template>
```

## Events

The **GTable** component can emit events to notify your application about user interactions. These events are optional and only emitted when you provide the corresponding prop with the event name.

### Checkbox Event

Emitted when a checkbox is toggled (if you have checkboxes in your table).

- **Prop to specify**: `checkEvent`
- **Event payload**:

  ```typescript
  {
    item: GTableItem,
    status: boolean,
  }
  ```

### Expand Event

Emitted when an expandable row is toggled (if you have expandable rows in your table).

- **Prop to specify**: `expandEvent`
- **Event payload**:

  ```typescript
  {
    index: number,
    expanded: boolean,
    item: GTableItem,
  }
  ```

For examples on how to handle these events, please refer to the examples page.


### Exposed Methods

The **GTable** component exposes two methods that can be called from the parent component to programmatically expand or collapse all rows:

- **`expandAll()`**: Expands all expandable rows in the table.
- **`collapseAll()`**: Collapses all expandable rows in the table.

These methods are made available through `defineExpose` and can be accessed via a component reference.

**Usage:**

To utilize these methods, you need to add a `ref` to your GTable component instance and then call the methods as needed.

```vue
<template>
  <GTable ref="gtable" :headers="headers" :items="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const gtable = ref(null);

// To expand all rows
gtable.value.expandAll();

// To collapse all rows
gtable.value.collapseAll();
</script>
```

### Notes

- **Optional Feature**: The `expandableAll` property in the `GTableHEader` interface is optional. If you don't need the expand/collapse all functionality, you can omit this property or set it to `false`.
- **Backward Compatibility**: This feature is introduced in version 0.3, but is backward compatible and does not affect existing implementations.
- **Programmatic Control**: Even if you don't use the `expandableAll` button in the header, you can still control the expansion and collapse of all rows programmatically using the exposed `expandAll()` and `collapseAll()` methods.



## Interfaces

### GTableHeader

The `GTableHeader` interface defines the structure of the header configuration objects used in the **GTable** component. Below is the complete list of properties, along with their types, default values, and descriptions:

```typescript
export interface GTableHeader {
  title: string;
  field: string;
  type?: string; // Optional, could be 'checkbox' or 'expandable'
  expandableAll?: boolean; // Optional, default is false. If 'type' is 'expandable' and 'expandableAll' is true, a button to expand/collapse all rows is shown in the header.
  checkboxStyle?: string; // Optional, use 'switch' for Bootstrap toggle switch style
  checkboxHeader?: boolean; // Optional, default is true. Set to false to hide the toggle all checkbox in the header when 'type' is 'checkbox'.
  isChecked?: (item: any) => boolean; // Optional callback function to determine the checked status of a row when using checkboxes.
  render?: (item: any) => string; // Optional callback function to customize the rendering of the cell content.
}
```

#### Properties

- **`title`** (`string`):
  - **Required**: Yes
  - **Description**: The display title of the column, shown in the table header.

- **`field`** (`string`):
  - **Required**: Yes
  - **Description**: The key used to access the corresponding value in the data items. It can also correspond to a named slot for custom rendering.

- **`type`** (`string`):
  - **Optional**: Yes
  - **Default**: `undefined`
  - **Description**: Specifies the type of the column. Supported values:
    - `'checkbox'`: Renders a checkbox in the column.
    - `'expandable'`: Renders an expandable/collapsible icon in the column.

- **`expandableAll`** (`boolean`):
  - **Optional**: Yes
  - **Default**: `false`
  - **Description**: When `type` is `'expandable'`, setting `expandableAll` to `true` adds a button in the header to expand or collapse all rows simultaneously.

- **`checkboxStyle`** (`string`):
  - **Optional**: Yes
  - **Default**: `undefined`
  - **Description**: Specifies the style of the checkbox when `type` is `'checkbox'`. Use `'switch'` for Bootstrap toggle switch style.

- **`checkboxHeader`** (`boolean`):
  - **Optional**: Yes
  - **Default**: `true`
  - **Description**: When `type` is `'checkbox'`, setting `checkboxHeader` to `false` hides the "select all" checkbox in the header.

- **`isChecked`** (`(item: any) => boolean`):
  - **Optional**: Yes
  - **Description**: A callback function used to determine if a row's checkbox should be checked. This is useful when you need custom logic to define the checked state of each row.

- **`render`** (`(item: any) => string`):
  - **Optional**: Yes
  - **Description**: A callback function that returns a string to customize the content rendered in the cell. This allows for dynamic and customized cell content without using slots.




### GTableItem

Represents a data item in the table.

```typescript
export interface GTableItem {
  [key: string]: any;
}
```

## Notes

- **Bootstrap and Icons**: Ensure that you include Bootstrap and Bootstrap Icons in your project to enable proper styling and icons. These are external dependencies of `goar-components`.

- **Unique Identifiers**:
  - If your data items have a unique identifier field, you can set the `keyField` prop to that field name.
  - If `keyField` is not specified or is an empty string, the component uses the index of the item in the array as the key.

  ```vue
  <GTable :headers="headers" :items="items" keyField="uniqueId" />
  ```

- **Customizing Appearance**: Use the `classes`, `bodyClasses`, and `headClasses` props to add custom CSS classes to the table elements for styling purposes.

  Example:

  ```vue
  <GTable
    :headers="headers"
    :items="items"
    classes="table-striped"
    bodyClasses="align-middle"
    headClasses="table-dark"
  />
  ```

- **Pagination**: By default, pagination is enabled. If you want to display all items without pagination, set the `pagination` prop to `false`.

  ```vue
  <GTable :headers="headers" :items="items" :pagination="false" />
  ```

- **Further Examples**: For more advanced usage examples, including how to implement checkboxes, expandable rows, and custom cell rendering, please refer to the examples page.

