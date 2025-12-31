# React Context API

The Context API allows data to be shared across multiple components without passing props manually at every level (prop drilling). It is designed for global or shared state, not for every piece of component state.

Using Context everywhere is bad design. Use it only when multiple distant components need the same data.

---

## Creating Context

Context is created using `createContext`. This only defines a container for data — it does not store state.

```js
import { createContext } from "react";

export const SubjectContext = createContext(null);
```


# React Context API Guide

## Provider

The Provider is responsible for supplying data to the component tree. Any component that needs access to the context must be a descendant of this Provider.
```jsx
import { useState } from "react";
import { SubjectContext } from "./SubjectContext";

function SubjectProvider({ children }) {
  const [subject, setSubject] = useState("Math");

  return (
    <SubjectContext.Provider value={{ subject, setSubject }}>
      {children}
    </SubjectContext.Provider>
  );
}

export default SubjectProvider;
```

### Key Points

- Provider placement matters
- Context values flow from top to bottom
- Updating the value triggers re-renders in all consuming components

## useContext

The `useContext` hook is used to read and consume the context value.
```jsx
import { useContext } from "react";
import { SubjectContext } from "./SubjectContext";

function Student() {
  const { subject, setSubject } = useContext(SubjectContext);

  return (
    <>
      <p>Selected Subject: {subject}</p>
      <button onClick={() => setSubject("Science")}>
        Change Subject
      </button>
    </>
  );
}
```

### Rules

- `useContext` must be used inside a matching Provider
- It automatically subscribes to context updates
- No manual listeners or subscriptions are required

## When NOT to use Context

Avoid using Context when:

- State is used by only one or two components
- Prop drilling is shallow and manageable
- State updates frequently (can cause unnecessary re-renders)

In these cases, local state or props are better choices.

## Summary

- `createContext` defines the context
- `Provider` supplies the data
- `useContext` consumes the data

Context is a powerful tool, but misusing it leads to bloated and fragile component trees. Use it only when it actually solves a real problem.