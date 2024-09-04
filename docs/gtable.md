
# GTable

GTable is a flexible and feature-rich data table component for Vue.js applications.

## Features

- TypeScript support
- Customizable table layout with CSS classes
- Sortable columns
- Checkbox selection
- Expandable rows
- Pagination
- Custom cell rendering

## Usage

```vue
<template>
  <GTable
    :headers="headers"
    :items="items"
    :pagination="true"
    :items-per-page="10"
    @check-event="handleCheckEvent"
    @expand-event="handleExpandEvent"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  { title: 'Name', field: 'name' }, 
  { title: 'Email', field: 'email' }, // [!code highlight]
  { title: 'Select', type: 'checkbox', field: 'id' }
]);

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
]);

const handleCheckEvent = (payload: any) => {
  console.log('Checkbox changed:', payload.item, payload.status);
};

const handleExpandEvent = (payload: any) => {
  console.log('Row expanded:', payload.index, payload.expanded);
};
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `classes` | string | '' | CSS classes for the table |
| `bodyClasses` | string | '' | CSS classes for the table body |
| `headClasses` | string | '' | CSS classes for the table header |
| `headers` | GTableHeader[] | [] | Array of header objects |
| `items` | any[] | [] | Array of data items |
| `keyField` | string | '' | Unique identifier field for items |
| `checkEvent` | string | '' | Event name for checkbox changes |
| `expandEvent` | string | '' | Event name for row expansion |
| `pagination` | boolean | true | Enable pagination |
| `currentPage` | number | 1 | Current page number |
| `itemsPerPage` | number | 10 | Number of items per page |
| `maxPageLinks` | number | 5 | Maximum number of page links to show |
| `showPageFirstLast` | boolean | false | Show first/last page buttons |
| `showPageIcons` | boolean | false | Use icons for pagination buttons |
| `paginationAlignment` | string | 'justify-content-end' | CSS class for pagination alignment |
| `paginationSize` | string | '' | CSS class for pagination size |

## Slots

- Dynamic slots for each column, named after the `field` property in the header object
- `expandable` slot for custom expandable row content

## Events

- `checkEvent`: Emitted when a checkbox is clicked. The event payload includes the item and its new status.
- `expandEvent`: Emitted when a row is expanded or collapsed. The event payload includes the row index and its expanded status.

## Types

The component exports the following TypeScript type:

```typescript
export interface GTableHeader {
  title: string;
  field: string;
  type?: string; // optional, could be "checkbox" or "expandable"
  checkboxStyle?: string; // optional, use "switch" for Bootstrap toggle switch style
  checkboxHeader?: boolean; // optional, set to false when checkbox type is set and the toggle all checkbox in header should not be displayed
  isChecked?: (arg: any) => boolean; // callback function to get the checked status if item is a checkbox
  render?: (arg: any) => string; // callback function to get the content to be rendered of the item
}
```
