# GToast Component Documentation

The **GToast** component is part of the `goar-components` library. It provides a convenient way to display toast notifications in your Vue.js applications using Bootstrap's toast component. This component allows you to show temporary messages to users, such as alerts, notifications, or confirmations, with customizable options.

## Table of Contents

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Methods](#methods)
- [Interfaces](#interfaces)
  - [GToastContent](#gtoastcontent)
- [Notes](#notes)

## Introduction

The **GToast** component leverages Bootstrap's toast component to display transient messages to users. It uses a global store (Pinia) to manage the queue of toasts, ensuring that they are displayed properly without conflicts. You can customize various aspects of the toasts, such as placement, appearance, and behavior.

## Basic Usage

To use the **GToast** component, you need to import it from `goar-components` and include it in your application. Here's a minimal example:

```vue
<template>
  <div>
    <!-- Include the GToast component in your root component -->
    <GToast ref="toastComponent" />
    <!-- Rest of your application -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GToast } from 'goar-components';
import type { GToastContent } from 'goar-components';

const toastComponent = ref();

function showToast() {
  const toastContent: GToastContent = {
    title: 'Notification',
    content: 'This is a toast message.',
  };
  toastComponent.value.addToast(toastContent);
}
</script>
```

In this example:

- **Including GToast**: Place the `<GToast>` component in your root component or a component that persists throughout your application.

- **Adding a Toast**: Use the `addToast` method exposed by the component to display a new toast.

## Props

The **GToast** component accepts the following props:

| Prop         | Type     | Default            | Description                                                                                           |
|--------------|----------|--------------------|-------------------------------------------------------------------------------------------------------|
| `placement`  | `string` | `'bottom-0 end-0'` | Sets the placement of the toasts on the screen using Bootstrap's positioning classes.                 |
| `maxNumber`  | `number` | `5`                | Specifies the maximum number of toasts to display at once. Setting to `0` disables the limit.         |

### Prop Descriptions

- **`placement`**: Determines where the toasts appear on the screen. It uses Bootstrap's positioning utility classes. Examples include `'top-0 end-0'` for top-right or `'bottom-0 start-0'` for bottom-left.

- **`maxNumber`**: Limits the number of toasts displayed simultaneously. When the limit is reached, the oldest toast is removed to make room for the new one.

## Methods

The **GToast** component exposes the following methods:

### `addToast(toast: GToastContent)`

Adds a new toast to the display queue.

- **Parameters**:
  - `toast`: An object of type `GToastContent` containing the details of the toast.

- **Usage**:

  ```typescript
  toastComponent.value.addToast({
    title: 'Success',
    content: 'Your action was successful.',
    ...additionalOptions
  });
  ```

## Interfaces

### GToastContent

Defines the structure of a toast object.

```typescript
export interface GToastContent {
  id?: string;
  title: string;
  content?: string;
  secondaryContent?: string;
  showTriggered?: boolean;
  delay?: number;
  animation?: boolean;
  autohide?: boolean;
  toastClasses?: string;
  headerClasses?: string;
  bodyClasses?: string;
  closeButtonClasses?: string;
  secondaryContentClasses?: string;
}
```

#### Properties

- **`id`** *(optional)*: Unique identifier for the toast. If not provided, a UUID is generated.

- **`title`**: The title text displayed in the toast header.

- **`content`** *(optional)*: The main content text displayed in the toast body.

- **`secondaryContent`** *(optional)*: Additional content displayed alongside the title, often used for timestamps or brief notes.

- **`showTriggered`** *(optional)*: Internal flag to track if the toast display has been triggered. Not typically set by users.

- **`delay`** *(optional)*: Time in milliseconds before the toast is automatically hidden. Default is `5000` (5 seconds).

- **`animation`** *(optional)*: Determines if the toast should animate when showing and hiding. Default is `true`.

- **`autohide`** *(optional)*: Determines if the toast should automatically hide after the delay. Default is `true`.

- **`toastClasses`** *(optional)*: Additional CSS classes for the toast container.

- **`headerClasses`** *(optional)*: Additional CSS classes for the toast header.

- **`bodyClasses`** *(optional)*: Additional CSS classes for the toast body.

- **`closeButtonClasses`** *(optional)*: Additional CSS classes for the close button.

- **`secondaryContentClasses`** *(optional)*: Additional CSS classes for the secondary content.

#### Predefined Toast Styles

The component provides predefined styles for common toast types:

- **`GToastSuccess`**: Style for success messages.

- **`GToastWarning`**: Style for warning messages.

- **`GToastDanger`**: Style for error or danger messages.

- **`GToastInfo`**: Style for informational messages.

**Usage Example**:

```typescript
import { GToastSuccess } from 'goar-components';

toastComponent.value.addToast({
  ...GToastSuccess,
  title: 'Success',
  content: 'Your data has been saved successfully.',
});
```

## Notes

- **Placement Options**: The `placement` prop accepts Bootstrap utility classes to position the toast container. Common placements include:

  - `'top-0 start-0'`: Top-left corner
  - `'top-0 end-0'`: Top-right corner
  - `'bottom-0 start-0'`: Bottom-left corner
  - `'bottom-0 end-0'`: Bottom-right corner (default)

- **Bootstrap Dependency**: Ensure that Bootstrap CSS and JavaScript are included in your project, as the component relies on Bootstrap's toast functionality.

- **Pinia Store**: The **GToast** component uses a Pinia store internally to manage the toast queue. The `goar-components` library includes and initializes Pinia automatically, so you don't need to set up Pinia separately in your Vue application.

- **Customization**: You can customize the appearance of toasts by providing your own CSS classes via the `toastClasses`, `headerClasses`, `bodyClasses`, etc.

- **Maximum Number of Toasts**: By default, the component displays up to 5 toasts at a time. You can adjust this limit with the `maxNumber` prop or set it to `0` to allow unlimited toasts.

- **Auto Hide**: The `autohide` and `delay` properties control whether a toast hides automatically and after how long. By default, toasts autohide after 5 seconds.

- **Close Button**: Each toast includes a close button that allows users to dismiss it manually.

- **Further Examples**: For more advanced usage examples, including how to customize toasts and handle different scenarios, please refer to the examples page.



