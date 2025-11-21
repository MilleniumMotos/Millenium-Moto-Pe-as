document.addEventListener("DOMContentLoaded", () => { 
    const form = document.getElementById("formAgendamento");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = form.querySelector("input[name='nome']").value.trim();
        const servico = form.querySelector("select[name='servico']").value.trim();
        const data = form.querySelector("input[name='data']").value.trim();
        const obs = form.querySelector("textarea[name='obs']").value.trim();

        // NÚMERO CORRIGIDO
        const telefone = "5582996116499";

        if (!nome || !data) {
            alert("Por favor, preencha seu Nome e Data.");
            return;
        }

        const mensagem =
`Olá! Gostaria de fazer um agendamento.

*Nome:* ${nome}
*Serviço:* ${servico}
*Data:* ${data}
*Observações:* ${obs || "-"}

Aguardo confirmação. Obrigado!`;

        const mensagemCodificada = encodeURIComponent(mensagem);
        const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;

        // Abre WhatsApp
        window.location.href = url;

        // Mostra mensagem de sucesso
        mensagemSucesso.style.display = "block";

        // Esconde após 4 segundos
        setTimeout(() => {
            mensagemSucesso.style.display = "none";
        }, 4000);

        // Limpa formulário
        form.reset();
    }); 
});
