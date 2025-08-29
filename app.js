// Configuración del evento (modificado)
const eventDate = new Date("September 8, 2025 20:30:00").getTime();

// Actualizar contador cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar resultado
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Si el evento pasó
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>¡El partido ya comenzó!</h2>";
    }
}, 1000);

// Funciones de botones (sin cambios)
function shareEvent() {
    if (navigator.share) {
        navigator.share({
            title: "¡Vamos Argentina!",
            text: "Partio Argentina vs Venezuela",
            url: window.location.href
        });
    } else {
        alert("Comparte esta URL: " + window.location.href);
    }
}

function openWhatsApp() {
    const message = encodeURIComponent("¡Te invito al partido de Argentina vs Brasil!");
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

// Google Calendar (enlace directo)
function addToCalendar() {
    const title = "Partido Argentina vs Brasil";
    const details = "Partido amistoso en el Estadio Monumental";
    const location = "Estadio Monumental, Buenos Aires";
    const dates = "20250908T203000/20250908T230000";

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${dates}`;
    
    window.open(calendarUrl, '_blank');
}

// Google Maps (enlace personalizado)
function openMaps() {
    window.open("https://www.google.com/maps/place/Estadio+Monumental/@-34.5455258,-58.4522481,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb43ae6018ddf:0x3d7f60a75bfa308a!8m2!3d-34.5455302!4d-58.4496732!16zL20vMDVmZDM4?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D", "_blank"); // Reemplaza con tu enlace
}