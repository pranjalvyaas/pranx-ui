# PranX Framework

Welcome to **PranX**, a next-generation full-stack system that fuses design, database, and core logic into one cohesive and modular ecosystem. Built to simplify complex development while maintaining raw power under the hood, PranX aims to revolutionize how you build and scale applications.

## 🌟 What is PranX?
PranX is a fully integrated framework designed to:

- **PranxUI**: Deliver elegant, modular, and reusable UI components.
- **PranxQL**: Provide an English-like, database query engine that works seamlessly across MySQL, SQLite, and more.
- **PranxDS**: Use custom tags with simple syntax like HTML for rapid development.
- **CoreJS**: Empower developers with an advanced engine for deep-level customization.

---

## 🚀 Why PranX?
Imagine a world where you can:

- **Write less, do more**: Short, human-readable syntax in both UI and database.
- **Modular Design**: Use what you need – UI, QL, or DS – independently.
- **Built-in Power**: No need for external servers – harness built-in browser capabilities.
- **Cross-Platform**: Works on Windows, Linux, and Android ecosystems seamlessly.

## 📖 The Story of PranX

It all began with a simple `.toast` component – a basic notification system. But as the ambition grew, so did the vision. We expanded from simple CSS to a fully-fledged **design system**. Then, the dream grew larger:

- **PranxQL** was born – combining the best features of MySQL, SQLite, and others while allowing simple English-like queries.
- **PranxDS** came next – with intuitive custom tags that make UI development as easy as writing HTML.
- **CoreJS** finally unified everything – delivering an advanced yet accessible engine.

Now, **PranX** stands tall – ready to challenge giants like React, Angular, and Vue!

## 📦 Installation

Generate the PranX system using the provided batch script. This will create separate folders for users and developers, including full source code and documentation.

### 1. Clone the Repository

```bash
git clone https://github.com/yourrepo/pranx.git
cd pranx
```

### 2. Run the Batch Script (Windows)

```bash
pranx_setup.bat
```

---

## 🧰 Folder Structure

```
pranx/
├── pranx-ui/       # PranX UI Components
├── pranx-ql/       # PranX Query Language Engine (Rust + JS)
├── pranx-ds/       # PranX Design System
├── core-js/        # Core Engine for Developers
└── docs/           # Documentation for Devs & Users
```

---

## 🛠️ Usage

1. **For Users**: Simply include the script in your HTML file:

```html
<script src="/pranx-ui.js"></script>
<script src="/pranx-ql.js"></script>
```

2. **For Developers**: Modify the core using Rust or JS as per the `/core-js` folder.

## 📊 Example Usage

### PranxQL Query Example

```html
<px-db>
  add user(name: 'Alice', age: 25);
  find user where age > 20;
</px-db>
```

### PranxUI Component Example

```html
<pranx-toast message="Welcome to PranX!" />
```

### PranxDS Custom Design Example

```html
<px-switch on="true" />
```

---

## 📣 Contribute
We welcome contributions! Fork the repo, make changes, and submit a PR.

1. Clone the repo
2. Make changes
3. Submit a Pull Request

---

## 📜 License

Licensed under the MIT License.

---

## 🌟 The Future of PranX
Phase 2 and beyond will bring advanced features:

- Real-time state management
- AI-enhanced design modules
- Enterprise-level optimizations

Join the **PranX** revolution today!

