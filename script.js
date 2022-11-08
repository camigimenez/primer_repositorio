const valorTicket= 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior= 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('calcular');
const botonReset = document.getElementById('reset');
const pagoTotal = document.getElementById('precio');


function totalPagar(){
    let totalValor = (cantidad.value) * valorTicket;
    if(categoria.value == 1){
        totalValor = totalValor - (totalValor*descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor*descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor*descuentoJunior);
    } else{
        totalValor = totalValor;
    }
    pagoTotal.innerHTML = `Total a pagar : ${totalValor}`;
    
}

botonCalcular.addEventListener('click',totalPagar);

botonReset.addEventListener('click',()=>{
    pagoTotal.innerHTML = `Total a pagar: `
});
