let prato=false, bebida=false, sobremesa=false;
let test=0;
function select(element) {
    const collection = document.getElementsByClassName(element.className);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.borderColor = "white";
        let icon = collection[i].getElementsByTagName("ion-icon");
        icon[0].style.color="transparent";
    }
    element.style.borderColor = "#32B72F";
    const icone = element.getElementsByTagName("ion-icon");
    icone[0].style.color="#32B72F";
    if(element.className == "opcao prato"){
        prato=true;
    }if(element.className == "opcao bebida"){
        bebida=true;
    }if(element.className == "opcao sobremesa"){
        sobremesa=true;
    }
    verifica();
}
function button() {
    alert("oi");
}
function verifica(){
    if(prato && bebida && sobremesa){
        const botao = document.getElementById("finalizar");
        botao.disabled=false;
        botao.style.backgroundColor= "#32B72F";
        botao.innerText = "Fechar pedido";
    }
}