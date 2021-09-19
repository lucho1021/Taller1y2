/*function calcularNumerosNegativos(numeritos=[]){
    let mnegativos = 0;

    for ( i = 0; i < numeritos.length; i++) {


        if(numeritos[i] < 0){

            mnegativos = mnegativos + 1; 
        }

    }

    return mnegativos;
}

console.log(calcularNumerosNegativos([-2,-3,-2,8,-5]))*/


let calcularNumerosNegativos = (numeritos=[]) =>  
{
    let mnegativos=0;
    for(let i = 0; i < numeritos.length; i++)
    {
        if(numeritos[i] < 0)
        {
            mnegativos = mnegativos + 1;
        }
    }
    return mnegativos;
}
console.log(calcularNumerosNegativos([-2, -3, -2, 8, -5]))

