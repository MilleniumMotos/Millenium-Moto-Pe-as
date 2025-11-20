document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formAgendamento");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Seu agendamento foi enviado! Em breve entraremos em contato.");
        });
    }
});