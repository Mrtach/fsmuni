let contador = 0;
function toggleLamp(){
    let lampara = document.getElementById('lamp').getAttribute('src');
    let lampOn ='/WebConStyle/images/lamp-on.png';
    let lampOff ='/WebConStyle/images/lamp-off.png';
    if(lampara.includes('/WebConStyle/images/lamp-off.png')){
        document.getElementById('lamp').src = lampOn;
        document.getElementById('toggle').classList.remove('btn-success');
        document.getElementById('toggle').classList.add('btn-danger');
        document.getElementById('toggle').innerHTML = 'Apagar';
        contador++;
        document.getElementById('contador').innerHTML = contador.toString();
    }
    else{
        document.getElementById('lamp').src = lampOff;
        document.getElementById('toggle').classList.add('btn-success');
        document.getElementById('toggle').classList.remove('btn-danger');
        document.getElementById('toggle').innerHTML = 'Encender';
    }
    PlaySound();
}
document.onkeydown = function (e) {
    e = e || window.event;
    if ('Enter'.includes(e.key)){
        toggleLamp();
    }
};

PlaySound = function () {
    var audio = new Audio('switch.mp3');
    audio.loop = false;
    audio.play(); 
}