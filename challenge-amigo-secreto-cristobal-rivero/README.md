# Proyecto de Sorteo de Amigos

## Descripción

¡Bienvenido al proyecto "Sorteo de Amigos"! Este es un sencillo pero divertido proyecto creado por **Cristóbal Rivero** que permite agregar amigos a una lista, realizar un sorteo aleatorio de uno de ellos y mostrar el resultado de manera dinámica en la página web.

El proyecto utiliza HTML, CSS y JavaScript para gestionar la interfaz y la lógica del sorteo, asegurando que el proceso sea interactivo y fácil de usar. Ideal para eventos sociales, dinámicas grupales o cualquier actividad en la que se desee seleccionar un amigo de manera aleatoria.

## Características

- **Agregar amigos:** Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto, los cuales se almacenan en una lista.
- **Sorteo aleatorio:** Una vez que se han agregado amigos a la lista, el sistema selecciona uno aleatoriamente y lo muestra como el amigo sorteado.
- **Interfaz dinámica:** La lista de amigos y el resultado del sorteo se actualizan dinámicamente en la página sin necesidad de recargarla.
- **Validación de entradas:** Si se intenta agregar un nombre vacío o un nombre ya existente en la lista, se muestra un mensaje de advertencia.
- **Accesibilidad:** El resultado del sorteo se muestra con un atributo `aria-live="polite"`, garantizando una experiencia accesible para personas con discapacidad visual.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica de la página.
- **CSS3**: Para los estilos y la apariencia visual.
- **JavaScript**: Para la lógica de la aplicación, manejo de eventos y selección aleatoria.
- **DOM Manipulation**: Para interactuar con el contenido de la página de manera dinámica.

## Cómo Funciona

1. **Agregar Amigos:**
   - El usuario ingresa un nombre en el campo de texto y presiona el botón para agregarlo.
   - Si el nombre es válido (no vacío y no repetido), se agrega a la lista de amigos.
   
2. **Realizar el Sorteo:**
   - El usuario hace clic en el botón de "Sortear Amigo".
   - El sistema selecciona aleatoriamente un nombre de la lista de amigos y lo muestra en la sección de resultados.


