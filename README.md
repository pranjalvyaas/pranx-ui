Here's a **README** for your **PranX Framework** repository:

---

# PranX Framework

**PranX** is a lightweight, component-based web framework designed to simplify web development. It provides a simple and powerful way to build interactive, accessible, and responsive web applications using minimal JavaScript. The goal of PranX is to allow developers to create beautiful, performant UIs with the least amount of effort and complexity.

PranX focuses on a **no-JavaScript** approach for most components, giving you rich functionality with just **HTML** and **CSS**. When advanced features are needed, you can extend the framework with minimal JavaScript, allowing for a truly **modular** and **extensible** experience.

---

## Key Features

- **Lightweight & Fast**: No dependencies and no need for complex JavaScript setups.
- **Component-Driven**: Easily integrate reusable components into your app.
- **Mobile-First**: Components are responsive and built to work on mobile devices.
- **Accessibility-First**: Built with **ARIA** attributes to ensure accessibility.
- **Minimal JavaScript**: Most components work out-of-the-box with only HTML and CSS. JavaScript is optional.
- **Easy Integration**: No need for bundlers or package managers—just link to the `pranx.min.js` and `pranx.min.css` files in your project.
- **Modular & Extensible**: Customize and extend components with minimal code.
- **Custom Elements**: PranX uses native custom HTML elements for clean, intuitive syntax.

---

## Components

PranX comes with several rich UI components to speed up your development process:

- **PranX Button** (`<pranx-btn>`): Customizable buttons with labels and actions.
- **PranX Toast** (`<pranx-toast>`): Display notifications or alerts.
- **PranX Input** (`<pranx-input>`): Input field with support for placeholder and type attributes.
- **PranX Select** (`<pranx-select>`): Dropdown menus for selecting options.
- **PranX Slider** (`<pranx-slider>`): Interactive range sliders for numeric input.
- **PranX Switch** (`<pranx-switch>`): Toggle switch for on/off states.
- **PranX Tooltip** (`<pranx-tooltip>`): Simple tooltips for providing additional information.
- **PranX List** (`<pranx-list>`): A list element for dynamically rendering content.

---

## Getting Started

### 1. Installation

Simply include the `pranx.min.css` and `pranx.min.js` files in your project.

#### Download PranX

You can either download the files directly from the GitHub repo or link to them via CDN.

```html
<link rel="stylesheet" href="path/to/pranx.min.css">
<script src="path/to/pranx.min.js"></script>
```

### 2. Usage

Once the files are linked, you can start using the PranX components with minimal setup.

#### Example: Button Component

```html
<pranx-btn label="Click Me" onclick="alert('Button clicked!')"></pranx-btn>
```

#### Example: Input Component

```html
<pranx-input placeholder="Enter your name" oninput="console.log(this.value)"></pranx-input>
```

#### Example: Toast Notification

```html
<pranx-toast message="This is a toast message!"></pranx-toast>
```

#### Example: Slider Component

```html
<pranx-slider min="0" max="100" value="50"></pranx-slider>
```

---

## Advanced Usage

Although most of the components are functional without JavaScript, you can extend their functionality with custom behaviors when needed.

For example, you can add custom event listeners, dynamic content handling, or complex interactions with just a small amount of JavaScript.

#### Example: Custom Button Click Behavior

```html
<pranx-btn id="myButton" label="Click Me"></pranx-btn>

<script>
  document.getElementById("myButton").addEventListener("click", function() {
    alert("You clicked the button!");
  });
</script>
```

---

## Why Choose PranX?

1. **Simplicity**: No complex build systems or dependencies. Just simple HTML and CSS for most components.
2. **Performance**: Lightweight, fast-loading, and designed to work well across mobile and desktop platforms.
3. **Accessibility**: All components come with built-in accessibility features (e.g., ARIA attributes).
4. **Flexibility**: Extend and customize components with minimal JavaScript for more advanced use cases.
5. **Mobile-First**: All components are responsive and mobile-optimized out-of-the-box.
6. **No JavaScript by Default**: Most of the core components work perfectly without writing a single line of JavaScript.

---

## Roadmap

PranX is still evolving! Here's what you can expect in future releases:

- **More UI Components**: We're continuously working on adding more components (e.g., modals, accordions, and more).
- **Improved Documentation**: More examples and tutorials to help developers get started quickly.
- **Cross-Browser Support**: Ensuring that PranX works seamlessly across all modern browsers.

---

## Contributing

We welcome contributions from the community! Whether it’s improving the documentation, fixing bugs, or adding new components, your help is greatly appreciated.

### How to Contribute:

1. **Fork the repository**.
2. **Clone** your fork to your local machine.
3. Create a **branch** for your feature or fix.
4. Make your changes and **commit** them.
5. **Push** your changes to your fork.
6. Open a **Pull Request** from your branch to the main repository.

---

## License

PranX is open-source and available under the [MIT License](LICENSE).

---

## Conclusion

PranX is a simple and powerful framework to build web applications. It focuses on reducing complexity and allowing developers to create fast, responsive, and accessible apps with minimal effort. Whether you're building a small landing page or a full-fledged application, PranX is the perfect solution for developers who want to keep things simple while still achieving great results.

---

Feel free to get started with **PranX** today and experience the simplicity of web development with minimal overhead.

---

**Have fun coding with PranX!**

