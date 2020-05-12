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
    - [SMACSS](#smacss)
  - [Preview](#preview)
  - [Conceptos](#conceptos)
    - [BEM](#bem)
    - [Tokens](#tokens)
    - [Grillas](#grillas)
    - [Testing](#testing)

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
gulp.task('sass', async()=>{
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});

```

Para compitar tu codigo usa:
`npm gulp-sass`

### SMACSS
Scalable and Modular Architecture for CSS

SMACSS se trata de una manera de construcción para los estilos de tu sistema. Es un paradigma basado en las siguientes categorías, que analizaremos en profundidad en esta clase:

- Base
- Layout
- Module
- State
- Theme

## Preview

[Preview en Heroku](https://test-curso-platzi-sd.herokuapp.com/)
## Conceptos
### OCSS
Object-Oriented CSS

Este se trata de un paradigma basado en la creación de objetos, que son básicamente lo que también se llama modulo o componente en otros paradigmas.

### BEM
BEM es un paradigma que anticipa modificadores de un componente.
En esta metodología categorizamos o dividimos las clases de la siguiente manera:

- Block
- Elements
- Modifiers

### Tokens
Nuestro objetivo es sistematizar nuestros procesos entonces nuestro sistema tiene que ser un ente configurable. En este sentido, los tokens son configuraciones que afectan a todo nuestro sistema tales como:

- Colores
- Tipografía
- Reglas de espaciado
- Brakepoints

### Espaciado
El organismo más común de toda plataforma es el formulario que nos ayuda a recopilar información del usuario. Para esto tomaremos elementos como:

- Label
- Input
- Alert
- Btn
- Modals

### Grillas
Hay tres cosas importantes qué definir dentro del grid de nuestro sistema:
- Nomenclatura de columnas
- Nomenclatura de los brakepoints
- Obtener los tokens de nuestro sistema para esta definición.

### Testing
Es muy importante definir la manera en que calificarás el éxito, cómo tendremos la capacidad de evaluar lo que diseñamos y construimos vs el usuario.

Para eso crearemos indicadores dentro del sistema que nos permitan tener esa respuesta y demuestre ante el equipo las desiciones que tomamos.

- Evaluemos el código vs Diseño
- Evaluemos el comportamiento
- Evaluemos el mobile

Se recomienda KANBAN para hacer pruebas
