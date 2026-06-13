# Animated-Tooltips

### ✨ About

Tooltips are one of those things you don't notice when they're done right, but immediately miss when they're gone. I built this project to understand how a simple hover interaction cam carry real meaning in a UI. Five different styles, four directions, all coming from a single reusable component.

---

### 🌟 Features

- 5 tooltip variants: dark, light, accent, outline and rich
- 4 positions: top, bottom, left and right
- Smooth fade animaton on hover
- Single reusable component controlled by props
- Real usage example with a toolbar

---

### 📁 Project structure

```
animated-tooltips/
└── src/
    ├── components/
    │   ├── Icon.jsx
    │   ├── IconButton.jsx
    │   └── Tooltip.jsx
    ├── data/
    │   └── icons.js
    ├── styles/
    │   └── App.css
    ├── App.jsx
    └── index.js
```

---

### 🛠️ Built With

- **JavaScript**
- **JSX**
- **CSS**

---

### 💡 What I Learned

- Building one reusable component and using props to control everything felt like a real shift in how I think about writing code
- React handles the state, CSS handles the animation. Once that clicked, everything made more sense
- Dynamic positioning based on a prop was a fun challenge that pushed me to think more flexibly
- Splitting files into their own components kept the project clean and easy to navigate
- The tooltip arrow was the most interesting part. A ``<span>`` with zero size shaped into a triangle using only CSS borders, one of those small tricks that stick with you

---

### 🎬 Preview

https://github.com/user-attachments/assets/ed94d1dc-4feb-4448-952d-7b5484bb4e8d
