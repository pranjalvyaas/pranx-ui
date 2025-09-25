

# PranX UI Framework 
Welcome to **PranX UI**, a modular, lightweight web component library designed for fast development of rich web interfaces using simple HTML tags.

***

## Installation

Include the bundled JavaScript file in your HTML project:

```html
<script src="pranx-ui.js"></script>
```

This defines all PranX UI custom elements globally.

***

## Components Overview

### 1. Pranx Button

- Usage:
```html
<pranx-button>Click Me</pranx-button>
```
- Supports `disabled` attribute and emits `pranx-click` event.

***

### 2. Pranx Input

- Usage:
```html
<pranx-input placeholder="Enter text"></pranx-input>
```
- Supports `type`, `value`, `placeholder`, `disabled` attributes.
- Emits `pranx-change` event on text input.

***

### 3. Pranx Textarea

- Usage:
```html
<pranx-textarea rows="4" placeholder="Your message here"></pranx-textarea>
```
- Supports `rows`, `value`, `placeholder`, `disabled`.
- Emits `pranx-change` event on input change.

***

### 4. Pranx Checkbox

- Usage:
```html
<pranx-checkbox label="Accept terms" checked></pranx-checkbox>
```
- Supports `label`, `checked`, `disabled`.
- Emits `pranx-change` event on toggle.

***

### 5. Pranx Radio

- Usage:
```html
<pranx-radio name="gender" value="male" label="Male" checked></pranx-radio>
<pranx-radio name="gender" value="female" label="Female"></pranx-radio>
```
- Supports `name`, `value`, `label`, `checked`, `disabled`.
- Emits `pranx-change`.

***

### 6. Pranx Select

- Usage:
```html
<pranx-select value="2">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</pranx-select>
```
- Supports `value` and `disabled`.
- Emits `pranx-change`.

***

### 7. Pranx Tabs

- Usage:
```html
<pranx-tabs>
  <div slot="tab">Tab 1</div>
  <div slot="tab">Tab 2</div>

  <div slot="panel">
    Content for Tab 1
  </div>
  <div slot="panel">
    Content for Tab 2
  </div>
</pranx-tabs>
```
- Switches tab contents, supports keyboard navigation by default.

***

### 8. Pranx Accordion

- Usage:
```html
<pranx-accordion>
  <div class="accordion-item">
    <div class="accordion-header">Section 1</div>
    <div class="accordion-content">Details for section 1</div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">Section 2</div>
    <div class="accordion-content">Details for section 2</div>
  </div>
</pranx-accordion>
```
- Collapsible content sections.

***

### 9. Pranx Toast

- Usage:
```html
<pranx-toast message="Notification text"></pranx-toast>
```
- Displays notification for 3 seconds, then auto-dismisses.

***

### 10. Pranx Modal

- Usage:
```html
<pranx-modal open>
  <h2>Modal Title</h2>
  <p>Modal content goes here.</p>
</pranx-modal>
```
- Use `open` attribute to show or hide modal.

***

### 11. Pranx Tooltip

- Usage:
```html
<pranx-tooltip text="Tooltip message" position="right">
  <button>Hover me</button>
</pranx-tooltip>
```
- Shows tooltip on hover or focus with configurable position (`top`, `bottom`, `left`, `right`).

***

### 12. Pranx Loader

- Usage:
```html
<pranx-loader variant="spinner"></pranx-loader>
<pranx-loader variant="dots"></pranx-loader>
```
- Spinner or dots animation, `variant` attribute controls style.

***

### 13. Pranx Pagination

- Usage:
```html
<pranx-pagination current="1" total="5"></pranx-pagination>
```
- Displays page buttons, prev/next, and jump input.
- Emits `pranx-page-change` with new page number.

***

### 14. Pranx Table

- Usage:
```html
<pranx-table
  columns='["Name","Age"]'
  data='[{"Name":"Alice","Age":30},{"Name":"Bob","Age":25}]'>
</pranx-table>
```
- Displays sortable table with JSON data.
- Clicking headers sorts columns ascending/descending.

***

### 15. Pranx Form

- Usage:
```html
<pranx-form>
  <input type="text" required placeholder="Required Field">
  <button type="submit">Submit</button>
</pranx-form>
```
- Wraps native form, provides basic validation with alert on errors.

***

## Demo Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>PranX UI Demo</title>
  <script src="pranx-ui.js"></script>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    section { margin-bottom: 30px; }
  </style>
</head>
<body>

  <section>
    <h2>Buttons</h2>
    <pranx-button id="btn">Click Me</pranx-button>
  </section>

  <section>
    <h2>Inputs</h2>
    <pranx-input placeholder="Enter your name"></pranx-input>
    <pranx-textarea rows="3" placeholder="Your message"></pranx-textarea>
  </section>

  <section>
    <h2>Selection</h2>
    <pranx-checkbox label="Accept Terms" checked></pranx-checkbox><br/>
    <pranx-radio name="gender" value="male" label="Male" checked></pranx-radio>
    <pranx-radio name="gender" value="female" label="Female"></pranx-radio><br/>
    <pranx-select value="2">
      <option value="1">Option One</option>
      <option value="2">Option Two</option>
    </pranx-select>
  </section>

  <section>
    <h2>Tabs</h2>
    <pranx-tabs>
      <div slot="tab">Tab One</div>
      <div slot="tab">Tab Two</div>
      <div slot="panel">Content for Tab One</div>
      <div slot="panel">Content for Tab Two</div>
    </pranx-tabs>
  </section>

  <section>
    <h2>Accordion</h2>
    <pranx-accordion>
      <div class="accordion-item">
        <div class="accordion-header">Section 1</div>
        <div class="accordion-content">Details about section 1</div>
      </div>
      <div class="accordion-item">
        <div class="accordion-header">Section 2</div>
        <div class="accordion-content">Details about section 2</div>
      </div>
    </pranx-accordion>
  </section>

  <section>
    <h2>Toast</h2>
    <pranx-toast message="Hello, this is a toast!"></pranx-toast>
  </section>

  <section>
    <h2>Modal</h2>
    <pranx-modal open>
      <h3>Modal Title</h3>
      <p>Some modal content.</p>
    </pranx-modal>
  </section>

  <section>
    <h2>Tooltip</h2>
    <pranx-tooltip text="Tooltip info here" position="bottom">
      <button>Hover Me</button>
    </pranx-tooltip>
  </section>

  <section>
    <h2>Loader</h2>
    <pranx-loader variant="spinner"></pranx-loader>
    <pranx-loader variant="dots"></pranx-loader>
  </section>

  <section>
    <h2>Pagination</h2>
    <pranx-pagination current="1" total="10"></pranx-pagination>
  </section>

  <section>
    <h2>Table</h2>
    <pranx-table
      columns='["Name","Age"]'
      data='[{"Name":"Alice","Age":30},{"Name":"Bob","Age":25}]'>
    </pranx-table>
  </section>

  <section>
    <h2>Form</h2>
    <pranx-form>
      <input type="text" required placeholder="Required field" />
      <button type="submit">Submit</button>
    </pranx-form>
  </section>

  <script>
    document.getElementById('btn').addEventListener('pranx-click', () => {
      alert('Button clicked!');
    });
  </script>

</body>
</html>
```

***

## Contribution and Extending

- Fork the repository.
- Add new components inside the source folder.
- Maintain encapsulated styles and simple attribute APIs.
- Submit Pull Requests for review.

