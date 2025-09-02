document.getElementById("iniciarBtn").addEventListener("click", () => {
    const nombre = document.getElementById("nombreJugador").value.trim();
    if(nombre) {
        localStorage.setItem("jugador", nombre);
        window.location.href = "categorias.html"; 
    } else {
        alert("Por favor, ingresa tu nombre para continuar.");
    }
});

