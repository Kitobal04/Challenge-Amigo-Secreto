// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    
    if(nombreAmigo == ''){
        alert('Debes ingresar un nombre');
        return;
    }

    if(listaNombres.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
        return;
    }else{
        listaNombres.push(nombreAmigo);
        alert(`Se añadio el nombre ${nombreAmigo} a la lista de sorteo`);
    }

    actualizarLista()

    // Limpiar el input después de agregar el nombre
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual (si quieres resetearla cada vez)

    // Recorrer el array de nombres y agregar cada uno al HTML
    listaNombres.forEach(nombre => {
        const nuevoElemento = document.createElement('li'); // Crear un nuevo elemento <li>
        nuevoElemento.textContent = nombre; // Asignar el nombre al texto del <li>
        listaAmigos.appendChild(nuevoElemento); // Agregar el <li> al <ul>
    });
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

    // Seleccionar un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceAleatorio];

    // Mostrar el nombre sorteado en el HTML
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpiar cualquier resultado previo

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = `¡El amigo sorteado es: ${nombreSorteado}!`;
    listaResultado.appendChild(nuevoElemento); // Mostrar el nombre sorteado
}
