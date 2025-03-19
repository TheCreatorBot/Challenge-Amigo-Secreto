const participantes = [];

function agregarParticipante() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();
    
    if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        actualizarLista();
    }
    
    nombreInput.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaParticipantes");
    lista.innerHTML = "";
    participantes.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function realizarSorteo() {
    if (participantes.length < 2) {
        alert("Debe haber al menos 2 participantes.");
        return;
    }
    
    let asignados = [...participantes];
    let resultado = {};
    
    participantes.forEach(participante => {
        let amigo;
        do {
            amigo = asignados[Math.floor(Math.random() * asignados.length)];
        } while (amigo === participante);
        
        resultado[participante] = amigo;
        asignados = asignados.filter(nombre => nombre !== amigo);
    });
    
    mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";
    
    for (const [persona, amigo] of Object.entries(resultado)) {
        const p = document.createElement("p");
        p.textContent = `${persona} → ${amigo}`;
        resultadosDiv.appendChild(p);
    }
}