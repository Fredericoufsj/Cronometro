window.onload = function() {
    var minutos = 00;
    var horas = 00;
    var somaMinuto = document.getElementById("horas");
    var somaHora = document.getElementById("minutos");
    var buttonIniciar = document.getElementById("iniciar");
    var buttonParar = document.getElementById("parar");
    var buttonRecomecar = document.getElementById("recomecar");
    var intervalo;

    buttonIniciar.onclick = () => {
        clearInterval(intervalo);
        intervalo = setInterval(iniciarCronometro, 10);
    }

    buttonParar.onclick = () => clearInterval(intervalo);

    buttonRecomecar.onclick = () => {
        clearInterval(intervalo);
        horas = "00";
        minutos = "00";
        somaHora.innerHTML = horas;
        somaMinuto.innerHTML = minutos;
    }

    function iniciarCronometro() {
        horas++;
        if (horas <= 9) {
            somaHora.innerHTML = "0" + horas;
        }
        if (horas > 9) {
            somaHora.innerHTML = horas;
        }
        if (horas > 99) {
            console.log("minutos");
            minutos++;
            somaMinuto.innerHTML = "0" + minutos;
            horas = 0;
            somaHora.innerHTML = "0" + 0;
        }
        if (minutos > 9) { somaMinuto.innerHTML = minutos; }
    }
}