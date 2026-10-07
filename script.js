function empezar () {
    const inicio = document.getElementById("inicio");
    inicio.innerHTML = `
        <div class="corazon">❤️</div>

        <h2>Primera estación: Primera mirada</h2>

        <p>
        BIENVENIDA A NUESTRA CITA
        </p>
        
        <button onclick="Siguiente()">
        Noot noot
        </button>

    `;
}

function Siguiente() {
    const inicio = document.getElementById("inicio");
    inicio.innerHTML = `
        <div class="corazon">❤️</div>

        <h2>Segunda estación: Primer beso</h2>

        <p>
        Pero esta vez, será diferente. Dos ideas, una elección. 
        </p>
        
        <button onclick="Continua ()">
        Abduscan
        </button>
        
    `;
}

function Continua () {
    const inicio = document.getElementById("inicio");
    inicio.innerHTML = `
        <div class="corazon">❤️</div>

        <h2>Tercera estación</h2>

        <p>
        ¿Dónde quieres ir?
        </p>
        
        <button onclick="respuesta ('a')">
        Abduscan
        </button>

        <button onclick="respuesta ('b')">
        Noot noot
        </button>
        
    `;
}

function respuesta(opcion) {
    const inicio = document.getElementById("inicio");
if (opcion === "a") {
    inicio.innerHTML = `
        <h2>KARAOKE</h2>

        <p>
        No sabía que querías quedarte sorda noot noot
        </p>

        <button onclick = "final ()"> Cita lista </button>
    `
} else if (opcion === "b") {
    inicio.innerHTML = `
        <h2>MUSEO DE CERA</h2>

        <p>
        ¿Lista para ver a tus ídolos mal hechos?
        </p>

        <button onclick = "final ()"> Cita lista </button>
    `
}
}

function final () {
    const inicio = document.getElementById("inicio");
    
    inicio.innerHTML =`
        <div class="corazon">❤️</div>
    
        <h2> ESTACIÓN FINAL NOOT NOOT</h2>

        <p>
        Ya has dado tu veredicto, ahora a disfrutar noot noot.
        </p>
        
        <p>
       PREPÁRATE PARA ESTA CITA QUE TE TENGO PREPARADA NOOT NOOT.
        </p>
        
        <p>
       Y SÍ, ES UNA AMENAZA. Disfruta ^^.
        </p>
    `
}