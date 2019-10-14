// Origen de asyn/await - CPS, promises, callbacks
// Tecnica simple para servir datos desde un Server a una pagina HTML
// Se agrego un Web Worker para estudiar su comportamiento
// El web worker se carga de forma independiente en un html
// no bloquea los demas procesos...
function responseFromServer() {
    var xhttp = new XMLHttpRequest();
    //console.log("desde ww: " + typeof xhttp);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log("index.js. dice: XMLHttpRequest dato de tipo:_" + typeof xhttp.responseText);
            postMessage(xhttp.responseText);
        }
    };
    //le proporcionamos la rura /alpha previamente configurada en routes>index.js
    xhttp.open("GET", "/alpha", true);
    xhttp.send();
}

responseFromServer();



