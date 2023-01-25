/*a - ai 
e - enter 
i - imes 
o - ober 
u - ufat*/

function encriptar() {
    var text = document.getElementById("textInput").value;
    var string = text.toString();
    var lower = string.toLowerCase();
    var encripted = lower.replace(/e/igm,"enter");
    var encripted = encripted.replace(/o/igm,"ober");
    var encripted = encripted.replace(/i/igm,"imes");
    var encripted = encripted.replace(/a/igm,"ai");
    var encripted = encripted.replace(/u/igm,"ufat");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("msg-text").style.display = "none";
    document.getElementById("msg-text2").innerHTML = encripted;
    document.getElementById("copy").style.cssText = "display: block";
    document.getElementById("instructions").style.cssText = "height: 75%;";
    document.getElementById("msg-text2").style.cssText = "font-size: 200%;"
}

function desencriptar() {
    var text = document.getElementById("textInput").value;
    var string = text.toString();
    var lower = string.toLowerCase();
    var encripted = lower.replace(/enter/igm,"e");
    var encripted = encripted.replace(/ober/igm,"o");
    var encripted = encripted.replace(/imes/igm,"i");
    var encripted = encripted.replace(/ai/igm,"a");
    var encripted = encripted.replace(/ufat/igm,"u");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("msg-text").style.display = "none";
    document.getElementById("msg-text2").innerHTML = encripted;
    document.getElementById("copy").style.cssText = "display: block";
}

function copiar() {
    var contenido = document.querySelector("#msg-text2");
    contenido.select();
    document.execCommand("copy");
}
