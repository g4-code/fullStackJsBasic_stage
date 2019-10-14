function responseFromServer01() {
    var xhttp01 = new XMLHttpRequest();
    xhttp01.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            postMessage(xhttp01.responseText);
        }
    };
    //callback
    //le proporcionamos la rura /alpha previamente configurada en routes>index.js
    xhttp01.open("GET", "/votingpool", true);
    xhttp01.send();
}

responseFromServer01();