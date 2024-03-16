# Landing page react

## Install React and tailwind css

- Create your project
```bash
npx create-react-app
```

- Install Tailwind CSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```

- **Configure your template paths** (Add the paths to all of your template files in your tailwind.config.js file.)
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to your CSS (Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.)
```css 
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Start your build process
```bash
npm run start
```

- Start using Tailwind in your project (Start using Tailwind’s utility classes to style your content.)
```js
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

- [Reference](https://tailwindcss.com/docs/guides/create-react-app)

## Extensions vscode
- eslint
- Prettier

## Extensions browser
- React Developer Tools