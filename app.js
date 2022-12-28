for (i=1; i<=6;i++){
    document.write("<H"+ i + ">El Pescadito sede "+ i + " ¡Gracias por su compra!" + "</H"+ i + ">")
}



function calculadora(valor1, valor2, operador) {
    switch (operador) {
        case "costo":
          return valor1 + valor2;
     case "propina":
          return (valor1 + valor2) * 0.1 ;
      case "descuento":
        return (valor1 + valor2) * 0.8;
       case "credito":
           return (valor1 + valor2)* 1.2;
        case "costoypropina":
        return (valor1 + valor2) * 1.1 ;

      default:
           return 0
  }
}

let n1 = Number(prompt("¡Bienvenido al Pescadito! Ingrese el valor de los platillos"))
let n2 = Number(prompt("Ingrese el valor de las bebidas"))
let operacion = prompt("Ingrese el operador a utilizar \n Ingrese costo para saber precio total \n Ingrese propina para calcular propina \n Ingrese descuento para precio los miercoles \n Ingrese credito si paga con tarjeta de credito \n Ingrese costoypropina para calcular costo + propina")

alert(calculadora(n1,n2,operacion))

sub-funcion 
function name(params){
sentencia
} 