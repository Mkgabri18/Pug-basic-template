# Inicio proyecto

## Para iniciar un project preparo git y npm

 `npm init -y` para inicializar el package.json
`git init` en el bash de git para inicializar git


Crear el ** .gitignore ** y especificar los file que no van en el commit


# Configuro webpack

```bash
npm i -D webpack webpack-cli
```
instalo en desarrollo(-D) **webpack** y su servidor.

Crear el ** webpack.config.js ** para configurar webpack( por ahora lo copio de los viejos proyectos)


# Dependencias de desarrollo

Los siguientes modulos son necesarios a gestionar pug, scss, archivos.

```bash
npm i -D pug-html-loader html-webpack-plugin html-loader
```



Plugins utiles para el desarrollo con bootstrap y jquery

```bash
npm i bootstrap jquery popper.js
```

## Config package.json
Para tener la posibilidad de arrancar el proyecto en desarrollo o copmilado pegar en los 'scripts' del file *package.json*
```bash
"dev": "webpack --watch --mode development",
"build": "webpack --mode production"
```

Ahora se puede arrancar el proyecto con
```bash
npm run dev => desarrollo & watch
npm run build => compilacion
```
