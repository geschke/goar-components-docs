# GTable Component Documentation

The **GTable** component is part of the `goar-components` library. It is a customizable Vue.js table component designed to display data in a simple and flexible way. This documentation provides guidance on how to use the **GTable** component in your Vue.js application.

## Table of Contents

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Slots](#slots)
- [Events](#events)
- [Sorting](#sorting)
- [Server-side Pagination](#server-side-pagination)
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
| `count`               | `number`                       | `0`                      | Total number of items on the server. If set to a value greater than `0`, server-side pagination mode is activated. See [Server-side Pagination](#server-side-pagination). |
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
| `sortField`           | `string`                       | `undefined`              | Optional controlled active sort field. Use together with `sortDirection` when the parent owns the sort state.                                               |
| `sortDirection`       | `'asc' \| 'desc' \| 'none'`    | `undefined`              | Optional controlled active sort direction. Use together with `sortField` for server-side sorting or restored table state.                                  |

### Prop Descriptions

- **`headers`**: An array of `GTableHeader` objects defining the table columns.

- **`items`**: An array of `GTableItem` objects representing the data to display in the table.

- **`classes`**: Additional CSS classes to apply to the `<table>` element.

- **`bodyClasses`**: CSS classes to apply to the `<tbody>` element.

- **`headClasses`**: CSS classes to apply to the `<thead>` element.

- **`keyField`**: Specifies the field in your data items that should be used as a unique key. If not provided, the index of the item in the array is used as the key.

- **`checkEvent`**: The name of the event to emit when a checkbox in the table is toggled.

- **`expandEvent`**: The name of the event to emit when an expandable row is toggled.

- **`count`**: The total number of items available on the server. Setting this to a value greater than `0` activates server-side pagination mode. In this mode, `items` is expected to contain only the current page's data slice, and GTable uses `count` to calculate the total number of pages. See [Server-side Pagination](#server-side-pagination) for details.

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

- **`sortField`** and **`sortDirection`**: Optional controlled sort state. When these props are passed, GTable renders the active sort indicator from the props instead of its internal state. This is useful for server-side sorting or restoring a saved table state. Pass both props together for predictable behaviour.

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

### Page Change Event (`pageChange`)

Emitted when the user navigates to a different page. This event is only emitted in **server-side pagination mode**, i.e. when the `count` prop is set to a value greater than `0`.

- **Event name**: `pageChange` (fixed)
- **Event payload**:

  ```typescript
  {
    page: number,    // the requested page number (1-based)
    offset: number,  // the start index for the server query: (page - 1) * itemsPerPage
    limit: number,   // the number of items to fetch: itemsPerPage
  }
  ```

### Sort Change Event (`sortChange`)

Emitted when the user clicks a sortable column header. This event is emitted in **both client-side and server-side pagination mode**.

In client-side mode the table sorts its items internally and you only need to listen to this event if your application requires additional reactions (e.g. persisting the sort state). In server-side mode you **must** handle this event to fetch the correctly sorted page from the server.

When `sortField` and `sortDirection` are used, the parent owns the active sort state. In that controlled mode, handle `sortChange` by updating those props; otherwise the table will emit the requested next state but keep rendering the old prop values.

- **Event name**: `sortChange` (fixed)
- **Event payload**:

  ```typescript
  {
    field: string,              // the header field being sorted
    direction: 'asc' | 'desc' | 'none',  // current sort direction; 'none' means no sorting
  }
  ```

When `direction` is `'none'`, the column has been cycled back to its unsorted state. The sort cycle per column is: **none → asc → desc → none → …**

Whenever the sort changes, GTable automatically resets the active page to 1.

For examples on how to handle these events, please refer to the examples page.


## Exposed Methods

The **GTable** component exposes the following methods that can be called from the parent component:

- **`expandAll()`**: Expands all expandable rows in the table.
- **`collapseAll()`**: Collapses all expandable rows in the table.
- **`resetSort()`**: Resets the internal active sort state (field and direction) back to the default (no sorting). In controlled sort mode, reset the parent-owned `sortField` and `sortDirection` props instead.

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

// To reset the active sort state
gtable.value.resetSort();
</script>
```

### Notes

- **Optional Feature**: The `expandableAll` property in the `GTableHEader` interface is optional. If you don't need the expand/collapse all functionality, you can omit this property or set it to `false`.
- **Backward Compatibility**: This feature is introduced in version 0.3, but is backward compatible and does not affect existing implementations.
- **Programmatic Control**: Even if you don't use the `expandableAll` button in the header, you can still control the expansion and collapse of all rows programmatically using the exposed `expandAll()` and `collapseAll()` methods.



## Sorting

GTable supports optional column sorting. Sorting is configured per column via the `sortable` property of `GTableHeader` and works in both client-side and server-side pagination mode.

### Enabling sortable columns

Set `sortable: true` on any header whose `field` is set and whose `type` is neither `'checkbox'` nor `'expandable'`. Columns without `sortable` (or with `sortable: false`) behave as before — no sorting, no click interaction.

```typescript
const headers = ref<GTableHeader[]>([
  { title: 'ID',    field: 'id' },                         // not sortable
  { title: 'Name',  field: 'name',  sortable: true },      // sortable
  { title: 'Email', field: 'email', sortable: true },      // sortable
]);
```

### Sort behaviour

- A sortable column header is clickable and shows an icon to the left of the title:
  - <i class="bi bi-chevron-expand"></i> — no active sort (default)
  - <i class="bi bi-caret-up-fill"></i> — sorted ascending
  - <i class="bi bi-caret-down-fill"></i> — sorted descending
- Each click cycles through: **none → asc → desc → none → …**
- Only one column can be active at a time. Clicking a different column resets the previous sort.
- Whenever the sort changes, the active page is automatically reset to **page 1**.

### Client-side sorting

When `count` is `0` (client-side mode), GTable sorts all `items` internally before slicing for the current page. No additional configuration is required.

### Server-side sorting

When `count > 0` (server-side mode), GTable does **not** sort internally. Instead it emits the `sortChange` event so the parent can request the correctly sorted page from the server:

```vue
<GTable
  :headers="headers"
  :items="currentItems"
  :count="totalCount"
  @pageChange="onPageChange"
  @sortChange="onSortChange"
/>
```

```typescript
function onSortChange({ field, direction }: { field: string, direction: 'asc' | 'desc' | 'none' }) {
  // direction 'none' means no sort — fetch the default order
  loadPage(0, 20, field, direction);
}
```

### Controlled sort state

Use `sortField` and `sortDirection` when the active sort state is owned by the parent component. This is the recommended approach for server-side sorting when the table can be opened with a preselected or restored sort state.

```vue
<GTable
  :headers="headers"
  :items="currentItems"
  :count="totalCount"
  :sort-field="sortField"
  :sort-direction="sortDirection"
  @pageChange="onPageChange"
  @sortChange="onSortChange"
/>
```

```typescript
type SortDirection = 'asc' | 'desc' | 'none';

const sortField = ref('name');
const sortDirection = ref<SortDirection>('desc');

function onSortChange({ field, direction }: { field: string, direction: SortDirection }) {
  sortField.value = field;
  sortDirection.value = direction;
  loadPage(0, 20, field, direction);
}
```

In controlled mode GTable derives the sort icon and `aria-sort` from the props. It does not copy those props into local state and does not require a watcher.

### Resetting sort state programmatically

When the parent replaces `items` fundamentally (e.g. after applying a filter), the sort indicator may no longer match the incoming data order.

In uncontrolled mode, call `resetSort()` on the component reference to clear the active internal sort field and direction:

```vue
<GTable ref="gtable" :headers="headers" :items="currentItems" :count="totalCount"
  @pageChange="onPageChange" @sortChange="onSortChange" />
```

```ts
const gtable = ref(null);

function applyFilter() {
  gtable.value.resetSort(); // clear sort indicator
  loadPage(0, 20);
}
```

In controlled mode, reset the parent state instead:

```ts
function applyFilter() {
  sortField.value = '';
  sortDirection.value = 'none';
  loadPage(0, 20);
}
```

`resetSort()` does not emit `sortChange`. If the server query needs to change, call your fetch logic directly after clearing the sort state.

### Notes on sortable columns

- `sortable` is silently ignored when `type` is `'checkbox'` or `'expandable'`, or when `field` is not set (e.g. render-only columns). This is intentional — those column types do not have a meaningful sort key.
- Sorting is string-based for text values (case-insensitive) and numeric for number values. `null` and `undefined` values sort to the beginning when ascending and to the end when descending.
- Sortable `<th>` elements receive an `aria-sort` attribute (`none`, `ascending`, or `descending`) automatically, which is required for screen reader accessibility.

## Server-side Pagination

By default, **GTable** operates in **client-side pagination mode**: all data items are passed via the `items` prop and GTable slices the array internally to display the correct page.

For large datasets it is more efficient to load only one page at a time from the server. Setting the `count` prop to the total number of records (as returned by the server) activates **server-side pagination mode**:

- `items` must contain only the data for the **current page** — GTable renders all passed items without any internal slicing.
- `count` is used to calculate the total number of pages for the pagination controls.
- Whenever the user navigates to a different page, GTable emits the `pageChange` event with `{ page, offset, limit }`. The parent is responsible for fetching the corresponding data slice and updating `items`.

### Minimal Example

```vue
<template>
  <GTable
    :headers="headers"
    :items="currentItems"
    :count="totalCount"
    :items-per-page="20"
    :show-loading="true"
    :loading="isLoading"
    @pageChange="onPageChange"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers: GTableHeader[] = [
  { title: 'ID', field: 'id' },
  { title: 'Name', field: 'name' },
];

const currentItems = ref([]);
const totalCount = ref(0);
const isLoading = ref(false);

async function loadPage(offset: number, limit: number) {
  isLoading.value = true;
  const response = await fetch(`/api/items?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  currentItems.value = data.items;
  totalCount.value = data.total;
  isLoading.value = false;
}

function onPageChange({ page, offset, limit }: { page: number, offset: number, limit: number }) {
  loadPage(offset, limit);
}

onMounted(() => loadPage(0, 20));
</script>
```

### Resetting to Page 1

When the displayed data changes fundamentally — for example after applying a filter — GTable's internal page counter needs to be reset. The idiomatic Vue way to achieve this without watchers is to change the `:key` attribute on the component, which forces a full re-mount and resets all internal state to its initial values:

```vue
<GTable
  :key="tableKey"
  :headers="headers"
  :items="currentItems"
  :count="totalCount"
  @pageChange="onPageChange"
/>
```

```ts
const tableKey = ref(0);

function applyFilter() {
  tableKey.value++; // triggers re-mount → page resets to 1
  loadPage(0, 20);
}
```

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
  sortable?: boolean; // Optional, default false. If true and field is set (and type is not 'checkbox'/'expandable'), the column header becomes clickable for sorting.
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

- **`sortable`** (`boolean`):
  - **Optional**: Yes
  - **Default**: `false`
  - **Description**: When `true`, the column header becomes clickable and enables sorting for this column. Requires `field` to be set. Has no effect when `type` is `'checkbox'` or `'expandable'`. See [Sorting](#sorting) for details.




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

- **Server-side Pagination**: Client-side and server-side pagination are mutually exclusive. If `count` is greater than `0`, server-side mode is active and GTable does not slice `items` internally. Remove the `count` prop (or set it to `0`) to return to client-side mode.

- **Further Examples**: For more advanced usage examples, including how to implement checkboxes, expandable rows, and custom cell rendering, please refer to the examples page.
