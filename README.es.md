<!-- hide -->
# Segunda parte de la TODO List, agregando fetch
<!-- endhide -->

Debes hacer este ejercicio después de la [aplicación de la TODO list con React](https://4geeks.com/es/interactive-coding-tutorial/todo-list-es) porque la primera parte es el boilerplate perfecto para comenzar a usar APIs.

Para esta segunda parte, sincronizaremos nuestra lista de tareas con una base de datos real, usando la siguiente [API RESTful](https://4geeks.com/es/lesson/understanding-rest-apis-es) y API pública realizada para este ejercicio.

🔗 Clic aquí para acceder a la [documentación de la API del TODO-list](https://playground.4geeks.com/todo/docs).

👉 [Aqui hay un video explicando como usar el TODO-List API con Fetch](https://www.youtube.com/watch?v=s6_-c0LFDRo).

Todo este ejercicio se trata de la programación asíncrona porque las interacciones *desde* y *hacia* el servidor deben realizarse de forma asíncrona. De esa manera, el usuario no tiene que esperar a que llegue la información.

<onlyfor saas="false" withBanner="false">
      
## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react boilerplate` usando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```text
https://github.com/4GeeksAcademy/react-hello
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

> 💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

</onlyfor>

## 📝 Instrucciones:

1. Haz que tu TODO List se sincronice con la API de backend cada vez que se agregue o elimine una tarea.
2. Agregue un botón de limpieza de todas las tareas que eliminará toda la lista del servidor y actualizará la lista vacía en el front-end.

**👉 Momentos clave para la integración:**
 
3. Cargar tareas al iniciar (`useEffect`)
   - Usa el método `GET` especificado en la documentación **para obtener la lista** y actualiza el estado que guarda la lista de tareas.

4. Agregar una tarea.
   - Usa el método `POST` especificado en la documentación **para añadir una nueva tarea** y luego, usa `GET` para actualizar la lista de tareas.

5. Eliminar una tarea
   - Usa el método `DELETE` **para eliminar una tarea** y luego `GET` para actualizar la lista.

6. Asegúrate de crear un usuario antes de añadir tareas.

## 💡 Pista:

Utiliza el siguiente fetch call para crear una nueva tarea en el servidor. Recuerda crearte un usuario primero. 

```js
fetch('https://playground.4geeks.com/todo/todos/alesanchezr', {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true si la respuesta es exitosa
        console.log(resp.status); // El código de estado 201, 300, 400, etc.
        return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
    })
    .then(data => {
        // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        // Manejo de errores
        console.log(error);
    });
```

> ⚠️ Para cualquier otra solicitud, debes cambiar las variables en el fetch: **La URL, el método y el payload**.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).


# Hello World con la platilla de React

> 🎥 Esta plantilla [cuenta con un video tutorial](https://youtu.be/oGpSVBsq7BA), para verlo haz clic aquí.

Comienza a codificar una aplicación con React.

> Si estás trabajando localmente en lugar de usar Codespaces o Gitpod, por favor sigue los [pasos de instalación local](#instalación-local-sáltalo-si-estás-trabajando-en-codespaces-o-gitpod) y regresa a esta parte del README.

## ¿Cómo comenzar a codificar?

- Instala los paquetes con `$ npm install`.
- Ejecuta el servidor de webpack con `$ npm run start`.

Puedes actualizar los archivos `styles/index.css` o `js/index.js` dependiendo de tus necesidades.  
Agrega más archivos en las carpetas `./src/js/components` o `styles` según los necesites.

## Instalación local (sáltalo si estás trabajando en Codespaces o Gitpod)

Descarga el boilerplate usando Git:

```bash
$ git clone https://github.com/4GeeksAcademy/react-hello.git
$ cd react-hello
```
## ¡Publica tu sitio web!

Este boilerplate es 100% compatible con los servicios de alojamiento gratuitos [GitHub Pages](https://pages.github.com/) y [Vercel](https://vercel.com/).

Solo toma 2 minutos desplegarlo, [haz clic aquí para comenzar el proceso](https://4geeks.com/docs/start/deploy-to-render-com).

## Otras características

- **Formateo automático de código**: Uso de [Prettier](https://prettier.io/) para la indentación y formateo automático del código.
- **Reporte de errores**: Uso de [ESLint](https://eslint.org/) para un mejor reporte de errores.

## Contribuidores

Esta plantilla fue creada como parte del [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) de 4Geeks Academy por [Alejandro Sánchez](https://twitter.com/alesanchezr) y otros contribuyentes.  
Descubre más sobre nuestro [Curso de Desarrollo Full Stack](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer) y [Bootcamp de Ciencia de Datos](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).


