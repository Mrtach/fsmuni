let resultado = document.getElementById("resultado");
function insertar(e){ 
    resultado.value += e;
}
document.onkeydown = function (e) {
    e = e || window.event;
    if ('0123456789/*-+'.includes(e.key)){
        insertar(e.key);
    }
    else if (e.key == 'Enter')
    {
        calc();
    }
    /*switch(e.key.in){
        case '1':
            insertar(e.key);
            break;
        case '2':
            insertar(e.key);
            break;
        case '3':
            insertar(e.key);
            break;
        case '4':
            insertar(e.key);
            break;
        case '5':
            insertar(e.key);
            break;
    }*/
};

function clearDisplay(){
    resultado.value = '';
}
function calc(){
    try{
        if(resultado.value != '') {resultado.value = eval(resultado.value);}
        else{console.log('no hay nada para calcular');}
    }
    catch{
        resultado.value = "ERROR";
    }
}