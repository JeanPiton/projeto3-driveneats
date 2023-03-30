let prato, bebida, sobremesa;
let test = 0;
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
function button() {
    const res = (prato[1] + bebida[1] + sobremesa[1]).toFixed(2);
    let pedido = "Olá, gostaria de fazer o pedido: - Prato: " + prato[0] + " - Bebida: " + bebida[0] + " - Sobremesa: " + sobremesa[0] + " Total: R$ " + res;
    encodeURIComponent(pedido);
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