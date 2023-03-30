let prato, bebida, sobremesa;
let test = 0;
const finalizar = document.getElementsByClassName("final");
function select(element) {
    const collection = document.getElementsByClassName(element.className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.borderColor = "white";
        let icon = collection[i].getElementsByTagName("ion-icon");
        icon[0].style.color = "transparent";
    }
    element.style.borderColor = "#32B72F";
    const icone = element.getElementsByTagName("ion-icon");
    icone[0].style.color = "#32B72F";
    if (element.className == "opcao prato") {
        prato = [element.getAttribute("data-nome"), +element.getAttribute("data-preco")];
    } if (element.className == "opcao bebida") {
        bebida = [element.getAttribute("data-nome"), +element.getAttribute("data-preco")];
    } if (element.className == "opcao sobremesa") {
        sobremesa = [element.getAttribute("data-nome"), +element.getAttribute("data-preco")];
    }
    verifica();
}
function button(){
    finalizar[0].style.display="flex";
    document.getElementById("pprato").innerText = prato[0];
    document.getElementById("cprato").innerText = prato[1].toFixed(2);
    document.getElementById("pbebida").innerText = bebida[0];
    document.getElementById("cbebida").innerText = bebida[1].toFixed(2);
    document.getElementById("psobremesa").innerText = sobremesa[0];
    document.getElementById("csobremesa").innerText = sobremesa[1].toFixed(2);
    document.getElementById("total").innerText = "R$ "+ (prato[1]+bebida[1]+sobremesa[1]).toFixed(2);
}
function cancelar(){
    finalizar[0].style.display = "none";
}
function confirmar() {
    const res = (prato[1] + bebida[1] + sobremesa[1]).toFixed(2);
    let pedido = "Olá, gostaria de fazer o pedido:\r\n- Prato: " + prato[0] + "\r\n- Bebida: " + bebida[0] + "\r\n- Sobremesa: " + sobremesa[0] + "\r\nTotal: R$ " + res;
    pedido = encodeURIComponent(pedido);
    location.href = 'https://wa.me/?text=' + pedido;
}
function verifica() {
    if (prato && bebida && sobremesa) {
        const botao = document.getElementById("finalizar");
        botao.disabled = false;
        botao.style.backgroundColor = "#32B72F";
        botao.innerText = "Fechar pedido";
    }
}