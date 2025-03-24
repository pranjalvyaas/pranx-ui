# Pranx Framework Documentation

Welcome to **Pranx**, an innovative and powerful modular framework designed to simplify UI development, database operations, and design system integration. This documentation will guide both **end-users** and **developers** through using and contributing to the Pranx ecosystem.

---

## 📦 What is Pranx?

Pranx started as a simple UI toolkit and has evolved into a **comprehensive system** encompassing:

- **PranxUI** – A minimal, flexible UI component system.
- **PranxQL** – A simple, English-like database query language inspired by popular database engines.
- **PranxDS** – A powerful design system that allows consistent theming and component styling.

Built using **JavaScript** for the front-end and **Rust** for the core, Pranx focuses on simplicity, modularity, and performance without requiring external servers.

---

## 🛠️ Installation & Usage

### For Users (Quick Start)

1. **Include Pranx in your project:**

Add the following script to your HTML file to start using Pranx directly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pranx Demo</title>
</head>
<body>
    <script src="pranx.bundle.js"></script>

    <pranx-toast message="Welcome to Pranx!"></pranx-toast>

    <pranx-table>
        <header>Name, Age</header>
        <row>John, 30</row>
        <row>Jane, 25</row>
    </pranx-table>
</body>
</html>
```

2. **Components Available:**

- `<pranx-toast>`: Displays a notification.
- `<pranx-table>`: Creates simple, responsive tables.
- `<pranx-form>`: Automatically handles form validation and submission.

### For Developers (Setup & Contribution)

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/pranx.git
cd pranx
```

2. **Build the Rust core:**

Ensure **Rust** is installed, then:

```bash
cargo build --release
```

3. **Run the project:**

```bash
npm install
npm run dev
```

4. **Folder Structure:**

```
/pranx
├── /core          # Rust-based database engine (PranxQL)
├── /ui            # JavaScript UI components (PranxUI)
├── /design        # Design system (PranxDS)
├── pranx.bundle.js # Unified bundle for users
└── README.md      # Documentation
```

---

## 📊 PranxQL - Database Language

PranxQL simplifies database operations with an **English-like syntax**:

### Example Queries:

```pranxql
ADD INTO users (name, age) VALUES ("John", 30);
GET FROM users WHERE age > 25;
REMOVE FROM users WHERE name = "Jane";
```

Supports **SQLite**, **MySQL**, and **Excel-like** interfaces.

---

## 🎨 PranxDS - Design System

PranxDS enables you to define themes and apply them to UI components.

Example:

```html
<pranx-theme primary="#4CAF50" secondary="#333"></pranx-theme>

<pranx-button>Click Me</pranx-button>
```

---

## 📖 Contribution Guide

We welcome contributions to the Pranx project!

1. Fork the repository.
2. Follow the setup instructions.
3. Submit a pull request (PR) with clear descriptions.

Join the revolution—help us take on **React**, **Vue**, and **Angular**!

---

## 📢 Community & Support

For questions, discussions, and support:

- **GitHub Issues**: Report bugs and request features.
- **Discord**: Join our developer community.

---

🚀 **Pranx – Simplicity, Power, and Innovation.**

