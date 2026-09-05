// 🪐 SUBPROCESO SOBERANO: FILTRO DE CREDENCIALES ALPHA v1.0
function verificarAccesoBunker() {
    const CLAVE_ALPHA_REAL = "ALPHA-2026";
    
    // Si el token ya está activo en el chip del teléfono, no molesta al operador
    if (localStorage.getItem("chat_token_autorizado") === "ACTIVE") {
        return;
    }
    
    // Forzado de bloqueo si no hay credenciales registradas
    localStorage.removeItem("chat_token_autorizado");
    const claveIngresada = prompt("🛰️ VALIDACIÓN ALPHA-CHAT [PROYECTO LIBERTAD]\n\nIntroduzca el Código de Invitación para acceder:");
    
    if (claveIngresada !== null && claveIngresada.trim() === CLAVE_ALPHA_REAL) {
        localStorage.setItem("chat_token_autorizado", "ACTIVE");
        alert("🟢 ACCESO PERMITIDO: Canal interconectado con éxito.");
        location.reload(); // Recarga limpia para encender los motores del chat
    } else {
        alert("❌ ACCESO RECHAZADO: Código inválido. Sector bloqueado.");
        document.getElementById("bunker-abierto-panel").style.setProperty("display", "none", "important");
        location.reload();
    }
}

// Ejecución automática al cargar el chasis
document.addEventListener("DOMContentLoaded", () => {
    // Para activar el cerrojo manual de las credenciales en tu próxima prueba, 
    // solo debes borrar el '//' de la línea de abajo:
    // verificarAccesoBunker();
});
