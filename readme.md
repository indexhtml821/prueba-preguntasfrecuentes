# Uso del bot en desarrollo
```bash
$ botonic serve
```


# Estructura del proyecto:

## src/:

route.js: en este documento se definirán las rutas que guiarán las entradas o acciones de usuario.
actions: se definen las respuestas que puede brindar su bot.
locales/: se guardan los objetos que brindarán soporte en caso de querer que atienda más de 1 lenguaje./index.js:se importan los lenguajes habilitados.
webviews:Son pop ups que brindan una experiencia de usuario más interactiva dentro del chat.
webchat:brinda el espacio para estilizar los componentes del chat.
nlu: se definen las declaraciones para cada lenguaje que tendrá soporte con el plugin Botoni NLU.
assets:se guardan los materiales que se hayan añadido al bot.
plugin.js:se definen los plugins añadidos al bot.

## tests/: 
se pueden crear tests para verificar el correcto funcionamiento del bot creado.

## …/: 
los otros archivos y carpetas es recomendable son archivos de configuración de babel y Botonic. Se recomienda no modificar estos archivos

