const btnAgregar = document.getElementById('agregarParticipante')
const inputParticipante = document.getElementById('nombreParticipante')
const listaParticipantes = document.getElementById('listaParticipantes')
const errorCarga = document.getElementById('errorCarga')
const nombreTorneo = document.getElementById('nombreTorneo')

// Funcion para cambiar el nombre del torneo
nombreTorneo.addEventListener('click', ()=>{
    const torneo = prompt('Ingrese el nuevo nombre del torneo')
    nombreTorneo.innerText = torneo
})

// Funcion para cargar y gestionar los participantes del torneo
btnAgregar.addEventListener('click', ()=>{
    const text = inputParticipante.value.trim() // Corta los caracteres de espacio (' ') sobrantes

    // Evita que se efectúe la carga con un campo vacío
    if (text === '') return errorCarga.innerText='Debe ingresar un nombre'

    // Crea un <div> donde irá la información del participante (más fácil para dar formato luego con CSS)
    const participante = document.createElement('div')
    participante.classList.add('participante')

    // Crea un <strong> y le asigna el nombre ingresado en el input para agregar un nuevo participante
    const nombre = document.createElement('strong')
    nombre.innerText = text

    // Crea un botón para marcar al participante como "presente"
    const btnPresente = document.createElement('button')
    btnPresente.innerText = 'Presente'
    btnPresente.addEventListener('click', ()=>{
        participante.classList.toggle('presente') // Le asigna la clase "presente" que esta formateada con CSS
    })

    // Crea un botón para eliminar al participante
    const btnEliminar = document.createElement('button')
    btnEliminar.innerText = 'Eliminar'
    btnEliminar.addEventListener('click', (e)=>{
        e.stopPropagation()
        listaParticipantes.removeChild(participante) // Elimina el div participante de la lista
    })

    // Agrega el texto (<strong>) y los botones (<button>) al div del participante
    participante.appendChild(nombre)
    participante.appendChild(btnPresente)
    participante.appendChild(btnEliminar)

    // Agrega el participante a la lista participantes (que tambien es un <div>)
    listaParticipantes.appendChild(participante)

    // Resetea el valor del input para evitar cargar al mismo participante pulsando dos veces en el boton
    inputParticipante.value=''
})