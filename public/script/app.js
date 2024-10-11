const btnAbrirModal = document.querySelector("#abrir-modal");
const btnFecharModal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const desaparece = document.querySelector("#desaparece");

const mudaModal = () => {
    [modal, desaparece].forEach((evento) => evento.classList.toggle('esconder'))
}

[btnAbrirModal, btnFecharModal, desaparece].forEach((evento) => {
    evento.addEventListener("click", () => mudaModal());
})

function mudaTexto() {
    var larguraTela = window.innerWidth
    var elementos = document.getElementsByClassName('mudaTexto')

    for (var i = 0; i < elementos.length; i++) {
        if (larguraTela > 860) {
            elementos[i].textContent = 'Mostrar mais'
        } else {
            elementos[i].textContent = 'Ver mais'
        }
    }
}

mudaTexto()
window.addEventListener('resize', mudaTexto)

