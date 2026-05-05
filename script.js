// =======================
// SCROLL SUAVE
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =======================
// SCROLL REVEAL
// =======================
const elements = document.querySelectorAll("section, .card, .skill-card");

const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            // APARECE
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        } else {
            // SOME DE NOVO
            el.style.opacity = "0";
            el.style.transform = "translateY(40px)";
        }
    });
};

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =======================
// TYPING EFFECT
// =======================
const text = "Desenvolvedor Front-End";
let index = 0;

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
    heroTitle.innerHTML = "";

    function typeEffect() {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();
}

const btnSkill = document.getElementById("btn-skill");

if (btnSkill) {
    btnSkill.addEventListener("click", () => {
        const box = document.getElementById("box-skill");

        box.style.transform = "translateX(150px) rotate(360deg)";
        
        setTimeout(() => {
            box.style.transform = "translateX(0)";
        }, 500);
        
    });
}
const btnReact = document.getElementById("btn-react");
let ativo = false;

if (btnReact) {
    btnReact.addEventListener("click", () => {
        const box = document.getElementById("box-react");
        const text = document.getElementById("react-text");

        ativo = !ativo;

        if (ativo) {
            box.style.background = "#22c55e"; // verde
            text.textContent = "Estado: ON";
        } else {
            box.style.background = "#2563eb"; // azul padrão
            text.textContent = "Estado: OFF";
        }
    });
}

const btnNode = document.getElementById("btn-node");

if (btnNode) {
    btnNode.addEventListener("click", () => {
        const status = document.getElementById("node-status");

        status.textContent = "Status: carregando...";

        setTimeout(() => {
            status.textContent = "Status: resposta recebida ✔️";
        }, 1500);
    });
}

const btnPython = document.getElementById("btn-python");

if (btnPython) {
    btnPython.addEventListener("click", () => {
        const output = document.getElementById("python-output");

        output.textContent = "Executando script...";

        setTimeout(() => {
            const resultado = Math.floor(Math.random() * 100);

            output.textContent = `Resultado: ${resultado}`;
        }, 1000);
    });
}

const btnSQL = document.getElementById("btn-sql");

if (btnSQL) {
    btnSQL.addEventListener("click", () => {
        const result = document.getElementById("sql-result");

        result.innerHTML = "Executando query...";

        setTimeout(() => {
            result.innerHTML = `
<table>
    <tr>
        <th>Nome</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>Portfólio</td>
        <td>Concluído</td>
    </tr>
    <tr>
        <td>API Node</td>
        <td>Em andamento</td>
    </tr>
</table>
            `;
        }, 1000);
    });
}

const btnJava = document.getElementById("btn-java");

if (btnJava) {
    btnJava.addEventListener("click", () => {

        // "Classe" simulando Java
        class Desenvolvedor {
            constructor(nome, nivel) {
                this.nome = nome;
                this.nivel = nivel;
            }

            apresentar() {
                return `Nome: ${this.nome} | Nível: ${this.nivel}`;
            }
        }

        const dev = new Desenvolvedor("Cauã", "Júnior");

        const output = document.getElementById("java-output");

        output.innerHTML = `
Objeto criado com sucesso ✔️ <br>
${dev.apresentar()}
        `;
    });
}

const btnGit = document.getElementById("btn-git");

if (btnGit) {
    btnGit.addEventListener("click", () => {
        const output = document.getElementById("git-output");

        output.textContent = "Commit realizado ✔️";

        setTimeout(() => {
            output.textContent = "Push enviado para o GitHub 🚀";
        }, 1000);
    });
}

const btnHtmlCss = document.getElementById("btn-htmlcss");

if (btnHtmlCss) {
    btnHtmlCss.addEventListener("click", () => {
        const box = document.getElementById("box-htmlcss");

        box.classList.toggle("ativo");
    });
}
