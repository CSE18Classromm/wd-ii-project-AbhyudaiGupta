# 🛍️ Myntra Clone — React.js Project (2nd Semester)

A modern, fully responsive **Myntra-inspired e-commerce fashion website** built using **React.js, JSX, HTML, CSS, and Bootstrap**. This project is an upgrade from the 1st-semester HTML/CSS version and demonstrates modern React concepts such as **components, props, state, hooks, routing, and Context API**.

> 🎯 Built as a 2nd semester academic project to showcase front-end development skills with React.

---

## 🚀 Live Demo

Run locally with the steps below — the project opens at `http://localhost:5173`.

---

## 📁 Folder Structure

```
myntra-clone/
│
├── public/                    # Static files (favicon, etc.)
│
├── src/
│   ├── components/            # 🔁 Reusable UI components
│   │   ├── Navbar.jsx         # Top navigation (logo, search, cart icon)
│   │   ├── Footer.jsx         # Site-wide footer
│   │   ├── ProductCard.jsx    # Single product card used in grids
│   │   ├── FilterSidebar.jsx  # Filters (brand, price) on listing page
│   │   └── Layout.jsx         # Wraps every page with Navbar + Footer
│   │
│   ├── pages/                 # 📄 Page-level components (routed)
│   │   ├── Home.jsx           # Landing page with banners + featured items
│   │   ├── ProductListing.jsx # Men / Women / Kids page (with filters)
│   │   ├── ProductDetail.jsx  # Single product view
│   │   ├── Cart.jsx           # Shopping bag page
│   │   └── Login.jsx          # Login / Signup UI
│   │
│   ├── context/               # 🌐 Global state
│   │   └── CartContext.jsx    # Cart + wishlist state using Context API
│   │
│   ├── data/
│   │   └── products.js        # Dummy product JSON data
│   │
│   ├── index.css              # Global + custom styles
│   ├── main.tsx               # ReactDOM entry — wraps App in CartProvider
│   └── App.tsx                # 🧭 Router setup (all routes defined here)
│
├── index.html                 # Bootstrap CDN + Google Fonts loaded here
├── package.json               # Project dependencies
├── tsconfig.json              # TypeScript config (allows .jsx)
└── README.md                  # You are reading this
```

---

## ⚙️ Steps to Run the Project

1. **Install Node.js** (v18 or higher) from https://nodejs.org

2. **Open terminal** inside the project folder and run:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

5. **To create a production build**:
   ```bash
   npm run build
   ```

---

## 🧠 Important React Concepts Used

| Concept | Where Used | Purpose |
|---|---|---|
| **JSX** | Every `.jsx` file | HTML-like syntax inside JavaScript |
| **Functional Components** | All components | Modern way to write components |
| **Props** | `ProductCard`, `FilterSidebar`, `Layout` | Passing data between parent & child |
| **useState** | `Cart`, `Login`, `ProductListing`, `ProductDetail` | Local component state |
| **useEffect** | `CartContext` | Sync cart with `localStorage` |
| **useMemo** | `ProductListing` | Optimize filtering performance |
| **Context API** | `CartContext` | Share cart globally without prop drilling |
| **Custom Hooks** | `useCart()` | Reusable cart logic anywhere in app |
| **React Router** | `App.tsx`, `Layout` | Multi-page navigation |
| **Dynamic Routes** | `/product/:id`, `/:category` | URLs with parameters |
| **Conditional Rendering** | `Cart`, `ProductListing` | Show different UI based on state |
| **Lists & Keys** | Everywhere (`products.map`) | Render arrays of items |
| **Controlled Forms** | `Login`, `FilterSidebar` | Inputs tied to React state |

---

## 🎨 Features

- ✅ Fully **responsive** design (mobile, tablet, desktop)
- ✅ **Search** products by name or brand
- ✅ **Filter** products by brand and price range
- ✅ **Add to Cart** with quantity controls
- ✅ **Wishlist** toggle on every product
- ✅ **Cart persists** on refresh (uses `localStorage`)
- ✅ **Dynamic routing** for product details
- ✅ **Login / Signup UI** (front-end only)
- ✅ Hover effects, banners, modern Myntra-like UI
- ✅ Reusable components for maintainability

---

## 📚 Viva Questions & Answers

### Q1. What is React?
**A:** React is a JavaScript library developed by Facebook (Meta) for building user interfaces. It uses a component-based architecture and a Virtual DOM for efficient updates.

### Q2. What is JSX?
**A:** JSX stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript. Under the hood, JSX is converted to `React.createElement()` calls by Babel.

### Q3. What is the difference between functional and class components?
**A:** Functional components are simple JS functions that return JSX. Class components extend `React.Component` and use `render()`. Modern React prefers **functional components with Hooks**.

### Q4. What are React Hooks? Name some.
**A:** Hooks are functions that let us "hook into" React state and lifecycle features from functional components.
Common hooks: `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`, `useRef`.

### Q5. What does `useState` do?
**A:** `useState` adds state to functional components. It returns a state variable and a setter function.
```js
const [count, setCount] = useState(0);
```

### Q6. What does `useEffect` do?
**A:** `useEffect` runs side effects (API calls, subscriptions, DOM updates) after a component renders. In this project, it saves the cart to `localStorage` whenever the cart changes.

### Q7. What are props in React?
**A:** Props (short for "properties") are inputs passed from parent to child components. They are **read-only** inside the child.

### Q8. Difference between State and Props?
**A:** **State** is managed *within* a component and can change. **Props** are passed *into* a component from its parent and are read-only.

### Q9. What is React Router?
**A:** React Router is a library for handling navigation in a React app. It lets us create multiple "pages" without full page reloads (Single Page Application).

### Q10. What is the Context API? Why did you use it?
**A:** The Context API allows us to share data (like cart state) across the entire app without passing props down manually through every component (called **prop drilling**).

### Q11. What is a custom hook?
**A:** A custom hook is a regular JavaScript function whose name starts with `use` and that calls other hooks. Example in this project: `useCart()`.

### Q12. How does the Add to Cart feature work?
**A:** Each product card has a button that calls `addToCart(product)` from the `CartContext`. The context updates its state array and saves it to `localStorage`. The cart icon in the Navbar reads `totalItems` and displays the count.

### Q13. Why did you use `useMemo` in ProductListing?
**A:** To **memoize** (cache) filtered product lists so React doesn't re-filter the array on every render unless the dependencies (filters/search) change. This improves performance.

### Q14. What is Virtual DOM?
**A:** A lightweight copy of the real DOM. When state changes, React updates the Virtual DOM first, compares it with the previous version (diffing), and only updates the changed parts in the real DOM (reconciliation).

### Q15. Why use `key` prop in `.map()`?
**A:** The `key` helps React identify which items have changed, been added, or removed. It must be unique (we use `product.id`).

### Q16. What is "lifting state up"?
**A:** Moving shared state to the closest common ancestor of components that need it. Example: `searchQuery` lives in `App` and is passed to both `Navbar` and `ProductListing`.

### Q17. How is the project responsive?
**A:** Using Bootstrap's grid system (`col-12 col-md-6 col-lg-3`) and CSS media queries in `index.css`.

### Q18. How does routing work in this project?
**A:** In `App.tsx`, we wrap everything in `<BrowserRouter>` and define routes with `<Route path="..." element={<Page />} />`. The `<Outlet />` inside `Layout.jsx` renders the active page.

### Q19. What is `localStorage`?
**A:** A browser API that stores key/value pairs persistently. In this project, the cart and wishlist are saved in `localStorage` so they remain after refresh.

### Q20. What improvements can be made in the future?
**A:**
- Integrate a real backend/API for products and authentication
- Add payment gateway (Razorpay / Stripe)
- Use Redux Toolkit for larger state management
- Add unit tests with Jest/React Testing Library
- Deploy on Vercel or Netlify

---

## 🧑‍💻 Tech Stack

- **React 18** (with Hooks)
- **React Router DOM v6**
- **Bootstrap 5** (CDN)
- **Bootstrap Icons**
- **Vite** (build tool)
- **Unsplash** (product images)

---

## 📝 License

This project is created for academic purposes (2nd Semester). Feel free to use it for learning.

---

Made with ❤️ using React.js
