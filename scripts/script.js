function calcularPropina(cuenta, Propina){
   const resultadoDato1YDato2 = cuenta * (Propina / 100);
   return Math.round(resultadoDato1YDato2);
}

function CalcularTotal() { 
    let dato1 = document.getElementById('numero1').value;
    let dato2 = document.querySelector('#numero2').value; 
    let resultados = calcularPropina(dato1, dato2);
    if(dato1 === '' || dato2 === ''){
       alert("Llenas los campos")
    }else{
       const resultado = Number(dato1) + resultados;
       const ocultarPrincipal = document.querySelector(".ocultar")
       ocultarPrincipal.classList.remove("ocultar")
       ocultarPrincipal.classList.add("agregar")
       const totalInicio = document.getElementById("Resultado1")
       totalInicio.innerHTML = `${dato1}`
       const totalMedio = document.getElementById("Resultado2")
       totalMedio.innerHTML = `${resultados}`
       const totalFinal = document.getElementById("Resultado3")
       totalFinal.innerHTML = `${resultado}`
       const botonBorrar = document.getElementById('Boton2');
       botonBorrar.addEventListener('click', function(){
       location.reload();})
   
    }
}

let btn1 = document.getElementById("Boton")

btn1.addEventListener("mouseover", function(){
   btn1.style.background = "purple" ;
})

btn1.addEventListener("mouseout", function(){
   btn1.style.background = "white" ;
})

let btn2 = document.getElementById("Boton2")

btn2.addEventListener("mouseover", function(){
   btn2.style.background = "purple" ;
})

btn2.addEventListener("mouseout", function(){
   btn2.style.background = "white" ;
})




