/*function calcularDistancia (coordenadax1,coordenaday1,coordenadax2,coordenaday2) {
  return("la distancia del planeta anuboo, es de: "+ Math.sqrt(Math.pow(coordenadax2 - coordenadax1,2) + Math.pow(coordenaday2 - coordenaday1,2) ) );
}
console.log(calcularDistancia(0,50,0,-70));*/

//Funcion de flechas

let calcularDistancia = (coordenadax1,coordenaday1,coordenadax2,coordenaday2) => "la distancia del planeta anuboo, es de: "+ Math.sqrt(Math.pow(coordenadax2 - coordenadax1,2) + Math.pow(coordenaday2 - coordenaday1,2) ) ;

console.log(calcularDistancia(0,50,0,-70));