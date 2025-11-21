/* CONFIGURAÇÃO DOS CEPS PERMITIDOS */
const fretes = {
    "57275000": 5,
    "57270000": 8,
    "57301100": 15,
    "57275971": 0,
    "57279000": 0
};

document.addEventListener("DOMContentLoaded", () => {
    const btnBuscaCep = document.getElementById("btnBuscaCep");
    const btnEnviar = document.getElementById("btnEnviar");

    const resNome = document.getElementById("resNome");
    const resPreco = document.getElementById("resPreco");
    const resFrete = document.getElementById("resFrete");
    const resTotal = document.getElementById("resTotal");

    // Carregar dados do produto vindo de produtos.html
    const params = new URLSearchParams(window.location.search);
    const nomeProd = params.get("product");
    const precoProd = parseFloat(params.get("price"));

    resNome.textContent = nomeProd;
    resPreco.textContent = precoProd.toFixed(2);

    /* BUSCAR CEP via ViaCEP */
    btnBuscaCep.addEventListener("click", async () => {
        const cep = document.getElementById("cep").value.replace(/\D/g, "");

        if (cep.length !== 8) {
            alert("Digite um CEP válido!");
            return;
        }

        // valida frete
        if (!fretes[cep]) {
            alert("Este CEP não está na área de entrega.");
            btnEnviar.disabled = true;
            return;
        }

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            const r = await fetch(url);
            const data = await r.json();

            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }

            document.getElementById("rua").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;

            const frete = fretes[cep];
            resFrete.textContent = frete.toFixed(2);
            resTotal.textContent = (frete + precoProd).toFixed(2);

            btnEnviar.disabled = false;

        } catch (e) {
            alert("Erro ao buscar CEP. Tente novamente.");
        }
    });

    /* ENVIAR PEDIDO (WHATSAPP + EMAIL) */
    btnEnviar.addEventListener("click", () => {

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const cep = document.getElementById("cep").value;
        const rua = document.getElementById("rua").value;
        let numero = document.getElementById("numero").value;
        const bairro = document.getElementById("bairro").value;
        const cidade = document.getElementById("cidade").value;

        // valida SN no número
        if (!numero || numero.trim() === "") {
            alert("Digite o número ou SN.");
            return;
        }

        // converter SN automaticamente
        numero = numero.toUpperCase();
        if (["SN", "S/N", "S N"].includes(numero.replace(/\s/g, ""))) {
            numero = "SN";
        }

        const frete = parseFloat(resFrete.textContent);
        const total = parseFloat(resTotal.textContent);

        // MENSAGEM
        const msg =
`📦 *Novo Pedido - Millenium Moto Peças*

🛒 *Produto:* ${nomeProd}
💲 *Preço:* R$ ${precoProd.toFixed(2)}

🚚 *Frete:* R$ ${frete.toFixed(2)}
💰 *Total:* R$ ${total.toFixed(2)}

👤 *Cliente:* ${nome}
📱 *Telefone:* ${telefone}

📍 *Endereço:*  
${rua}, ${numero} - ${bairro}  
CEP: ${cep} - ${cidade}

Agradecemos pela preferência!`;

        /* WHATSAPP */
        const numeroWhats = "5582996006394"; // SEU NÚMERO
        const urlWpp = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(msg)}`;
        window.open(urlWpp, "_blank");

        /* EMAILJS */
        emailjs.init("service_default");  

        emailjs.send("service_default", "template_default", {
            produto: nomeProd,
            preco: precoProd.toFixed(2),
            frete: frete.toFixed(2),
            total: total.toFixed(2),
            nome: nome,
            telefone: telefone,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            emailDestino: "wedyslanoliveira123@gmail.com"
        });

        alert("Pedido enviado com sucesso!");
    });
});
