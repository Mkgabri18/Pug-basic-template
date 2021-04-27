# Inicio proyecto

## Para iniciar un project preparo git y npm

`git init` en el bash de git para inicializar git

Para inicializar el package.json
```bash
npm init -y
```

Crear el **\.gitignore ** y especificar los file que no van en el commit


## Configuro webpack

```bash
npm i -D webpack webpack-cli webpack-dev-server
```
instalo en desarrollo(-D) **webpack** y su servidor.

Crear el ** webpack.config.js ** para configurar webpack, agregar los siguentes script:
```json
"script": {
	"build": "webpack --mode=production",
	"build:dev": "webpack --mode=development",
	"dev": "webpack-dev-server --mode=development"
},
```

Ahora se puede arrancar el proyecto con
```bash
npm run build => compilacion
npm run build:dev => compilacion en desarrollo
npm run dev => desarrollo y watch
```

## Dependencias de desarrollo

- Los siguientes modulos son necesarios a gestionar pug, scss, archivos.

```bash
npm i -D pug pug-loader html-webpack-plugin
```

```bash
npm i -D css-loader style-loader node-sass sass-loader
```

- Plugins utile para el desarrollo con bootstrap y jquery

```bash
npm i bootstrap jquery popper.js
```


