re = new RegExp("^[a-z/s ]+$");

function apareceConteudo() {

    document.querySelector("#texto3").value = "";
    document.querySelector("#texto3").classList.remove("background");
    document.querySelector("#gif").classList.remove("z-index");
           
    document.querySelector(".digito").classList.remove("z-index");
    document.querySelector(".nombre").classList.remove("z-index");

}

function apareceTexto(nuevoTexto) {

    document.querySelector("#texto3").classList.add("background");
    document.querySelector("#gif").classList.add("z-index");  
    document.querySelector(".digito").classList.add("z-index")
    document.querySelector(".nombre").classList.add("z-index");
    document.querySelector("#texto3").value = nuevoTexto;
    document.querySelector("#texto").value = "";
    document.querySelector("#texto").focus();
    event.preventDefault();
    
}

function invalidaMensagem() {
    document.querySelector("#texto").setCustomValidity("solo letras minusculas");

}

function apagaAviso() {
    document.querySelector("#texto").setCustomValidity("");

}

function apareceInvalido() {
    document.querySelector(".invalido").style.opacity = "80%"

}

function apagaInvalido() {
    document.querySelector(".invalido").style.opacity = "0%"

}

function apareceCopiado() {
    document.querySelector(".valido").style.opacity = "80%"

}

function apagaCopiado() {
    document.querySelector(".valido").style.opacity = "0%"

}



document.querySelector("#encriptar").addEventListener("click", () => {
   
    texto = document.querySelector("#texto").value;
    
    if(texto.match(re)) {

        let nuevoTexto = texto.replace(/e/g, "enter");
        nuevoTexto = nuevoTexto.replace(/i/g, "imes");
        nuevoTexto = nuevoTexto.replace(/a/g, "ai");
        nuevoTexto = nuevoTexto.replace(/o/g, "ober");
        nuevoTexto = nuevoTexto.replace(/u/g, "ufat");

        apareceTexto(nuevoTexto); 

    }else if (!texto.match(re) && texto !== "") {
        
        invalidaMensagem();
        setTimeout(apagaAviso, 1200);

    }

});

document.querySelector("#desencriptar").addEventListener("click", () => {

    texto = document.querySelector("#texto").value;
    

    if(texto.match(re)) {

        let nuevoTexto = texto.replace(/enter/g, "e");
        nuevoTexto = nuevoTexto.replace(/imes/g, "i");
        nuevoTexto = nuevoTexto.replace(/ai/g, "a");
        nuevoTexto = nuevoTexto.replace(/ober/g, "o");
        nuevoTexto = nuevoTexto.replace(/ufat/g, "u");

        apareceTexto(nuevoTexto);

    }else if(!texto.match(re) && texto !== "") {

        invalidaMensagem();
        setTimeout(apagaAviso, 2000)
        
    }

});


document.querySelector("#copiar").addEventListener("click", () => {
    
    textoCopiado = document.querySelector("#texto3").value;
    
    if(textoCopiado == "") {

        apareceInvalido()
        setTimeout(apagaInvalido, 1200)
        
    }
    
    if(textoCopiado != "") {
        
        textoCopiado = document.querySelector("#texto3").select();
        document.execCommand("copy");
        apareceCopiado()
        setTimeout(apagaCopiado, 1200)
        apareceConteudo();
        document.querySelector("#texto").focus();

    }
});    