# Sistema de diseño para Desarrolladores
El sistema de diseño se basa en ayudar de manera estandarizada y óptima los procesos de creación de funcionalidades, flujos y componentes del producto.

Es por eso que podemos definir diferentes puntos a tener en cuenta ahora que construyamos nuestro sistema de diseño:

- Flujo del equipo
- Sistema de versionamiento y alta de documentos y pantallas
- Documentación
- Construcción y distribución
- Revisión y deploy
- [Sistema de diseño para Desarrolladores](#sistema-de-dise%c3%b1o-para-desarrolladores)
  - [Requisitos:](#requisitos)
    - [Express](#express)
    - [Gulp](#gulp)

## Requisitos:

Instalación de [Node](https://nodejs.org/es/)

### Express
Intalación Global

`npm install express -g`

Si hay un error puedes ejecutar: 

`sudo npm install -g express-generator`

### Gulp
Instalación:
`npm install gulp`

Gulp SASS:
`npm install gulp-sass`

Crea un archivo en la raíz de tu carpeta con el nombre *gulpfile.js*

Agrega el siguiente código para que gulp pueda compilar tus .scss a css

```
var gulp = require('gulp');
var sass = require('gulp-sass');

//npm install gulp-sass
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});

```

Para compitar tu codigo usa:
`npm gulp-sass`