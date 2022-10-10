function addE() {

  elemento = document.getElementById("valor").value;
  if (localStorage.cartao) {
    let carta = localStorage.cartao;
    let cartajson = JSON.parse(carta);

    let obj = {
      class1: 'div1',
      class2: 'div14',
      texto: elemento
    }

    cartajson.push(obj);
    let cartastring = JSON.stringify(cartajson);
    localStorage.cartao = cartastring;

  } else {
    localStorage.cartao = JSON.stringify([
      {
        class1: 'div1',
        class2: 'div14',
        texto: elemento
      }
    ])
  }

  let divpai = document.querySelector(".pai");
  divpai.innerHTML = " ";
  mostrar();

}

let divpai = document.querySelector(".pai");

function mostrar() {

  let dados = JSON.parse(localStorage.cartao);
  dados.map(item => {
    let ele = document.createElement("div");

    /* ele.classList.add(item.classe1);
     ele.classList.add(item.classe2); */
    ele.classList.add("div1");
    ele.classList.add("div14");
    ele.textContent = item.texto;
    divpai.appendChild(ele);
  })

}

window.onload = function() {
  mostrar();
}