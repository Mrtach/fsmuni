function toggleLamp(){
    let lampara = document.getElementById('lamp').getAttribute('src');
    let lampOn ='/WebConStyle/images/lamp-on.png';
    let lampOff ='/WebConStyle/images/lamp-off.png';
    if(lampara == '/WebConStyle/images/lamp-off.png'){
        document.getElementById('lamp').src = lampOn;
    }
     if (lampara == lampOn){
        document.getElementById('lamp').src = lampOff;
    }
}