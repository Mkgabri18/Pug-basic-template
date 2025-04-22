# Pug & Sass Frontend Template

A free and open-source template for frontend development using **Pug** and **Sass**. This project is designed to help developers quickly set up a modern and modular workflow for building responsive and maintainable web applications.

---

## Getting Started

### Initialize the Project

1. **Clone the Repository**  
   Clone this template to your local machine:
   ```bash
   git clone https://github.com/Mkgabri18/Pug-basic-template.git
   cd Pug-basic-template
   ```

2. **Install Dependencies**  
   Install the required npm packages:
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   Start the development server with hot module replacement:
   ```bash
   npm run dev
   ```

4. **Build for Production**  
   Generate optimized files for production:
   ```bash
   npm run build
   ```

---

## Features

- **Pug Templates**: Component-based architecture for better maintainability.
- **SCSS Support**: Modular SCSS files for styling.
- **Webpack Integration**: Efficient bundling and development server with hot module replacement.
- **Responsive Design**: Predefined breakpoints and mixins for responsive layouts.

---

## Development Dependencies

This project uses the following tools and libraries:

1. **Core Tools**  
   - [Webpack](https://webpack.js.org/): Module bundler.
   - [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/): Development server with live reloading.

   Install with:
   ```bash
   npm i -D webpack webpack-cli webpack-dev-server
   ```

2. **Template Engine**  
   - [Pug](https://pugjs.org/): HTML template engine.
   - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): Simplifies HTML file creation.

   Install with:
   ```bash
   npm i -D pug pug-loader html-webpack-plugin
   ```

3. **Styling**  
   - [Sass](https://sass-lang.com/): CSS preprocessor.
   - [css-loader](https://webpack.js.org/loaders/css-loader/): Resolves CSS imports.
   - [style-loader](https://webpack.js.org/loaders/style-loader/): Injects CSS into the DOM.

   Install with:
   ```bash
   npm i -D css-loader style-loader sass sass-loader
   ```

---

## Project Structure

```
├── src/
│   ├── app.js
│   ├── styles/
│   │   ├── style.scss
│   │   ├── components/
│   │   ├── config/
│   │   └── base/
│   ├── templates/
│   │   ├── layouts/
│   │   ├── includes/
│   │   ├── components/
│   │   └── views/
├── webpack.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## Scripts

The following npm scripts are available:

- **`npm run dev`**: Starts the development server with live reloading.
- **`npm run build`**: Builds the project for production.
- **`npm run build:dev`**: Builds the project in development mode.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it for personal or commercial purposes.

---

## Contributing

Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

---

## Author

Created by [Gabriel Carrasco](https://github.com/Mkgabri18). If you like this project, consider giving it a ⭐ on GitHub!