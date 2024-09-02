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