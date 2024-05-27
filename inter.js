function cephas() {
    var tab = [];
    for ( ; ; ) {
        var nombre = prompt("Entrez un nombre");

            if (nombre === "") {
                break;
            } else {
            tab.push(nombre);
        }

    }
    return tab;

}
console.log(cephas());

