# 📌 Props in React

Props (**properties**) are a way to pass data from a **parent component** to a **child component** in React. They help make components reusable and dynamic.

---

## 🚀 What Are Props?

- Props are **inputs** to components.
- They are passed like **attributes** in HTML.
- Props are **read-only** (immutable).
- Think of props as **function parameters** for components.

---

## ✨ Example: Accessing Props

```jsx
function User(props) {
  console.log(props);        // Logs the entire props object
  console.log(props.name);   // Accessing a specific property

  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}
```

---
## ✨ Example: Object Destructuring (**Recomended**)

```jsx
function User({ name }) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
```

---
## ✨ Children Prop in React

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

```

## 📌 Using children in Parent Component

```
function App() {
  return (
    <Card>
      <h2>Hello from inside the Card!</h2>
      <p>This content is passed as children.</p>
    </Card>
  );
}
```


### 📦 Props + Children Together

```
function Profile({ name, age, children }) {
  return (
    <div>
      <h2>{name} - {age}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <Profile name="John" age={25}>
      <p>This paragraph is passed as children</p>
    </Profile>
  );
}
```