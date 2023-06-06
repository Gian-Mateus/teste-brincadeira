const botaoNao = document.getElementById("nao");
const info = document.querySelector("h1");
const coracao = document.getElementById("coracao");

botaoNao.onclick = () => {
  botaoNao.style.marginLeft = Math.random() * 1000 + "px";
  botaoNao.style.marginRight = Math.random() * 1000 + "px";
  botaoNao.style.marginTop = Math.random() * 1000 + "px";
  botaoNao.style.marginBottom = Math.random() * 1000 + "px";

    info.textContent = "Ué, você tem dúvidas? Aperta o sim então."
};

const botaoSim = document.getElementById("sim");

botaoSim.onclick = () => {
  coracao.classList.add("inicio");

    info.textContent = "Claro que sim! É a melhor!"

  setTimeout(function () {
    coracao.classList.remove("inicio");
    coracao.classList.add("batimentos");
  }, 4000);
};
