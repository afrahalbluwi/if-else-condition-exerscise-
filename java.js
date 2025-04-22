// Camila quiere montar en una atracción y no sabe si la dejarán subir, la altura mínima para subir son 150cm. Haz una función que reciba la altura en cm y determine si Camila puede montar o no.



function clim (altura) {
    if (altura >= 150) {
        console.log (" Puedes montar en la atracción ");
    } else {
        console.log (" Lo siento, no puedes montar ");
    }
}

clim (160);
clim (140);


// Bego está intentando conseguir envío gratuito en su pedido online. Crea una función que reciba como parámetro el total de su compra y determine si supera los 50€ para obtener el envío gratis o si tendrá que pagarlo.



function enviogrates (eltotal)
{
    if (eltotal > 50 ) {
    console.log ("envio gratis");} 
    else {
        console.log ("envio no gratis");
    }
}

enviogrates (50)
enviogrates (30)


//Sabrina quiere saber si un número es múltiplo de 7. Crea una función que reciba un número y determine si es múltiplo o no.



//Abby está evaluando candidatos para su equipo. Los candidatos harán tres pruebas y cada una se evalúa de 0 a 10. Si la media está entre 0 y 4 mostrará el mensaje "Estás Fuera", si la media está entre 5 y 7 mostrará "Entras en la reserva" y si la media es 8 o más dirá "Salimos al amanecer".

function  candidatos  (resoult)
  { if (resoult >= 0 && resoult <= 4 ) {console.log ("Estás Fuera");}
else if ( resoult>=5 && resoult <=7){console.log ("Entras en la reserva");} 
else if (resoult <= 8)
 {console.log ("Salimos al amanecer");}
else {console.log ("salemos al amanecer");}
}

candidatos (3,5,2)
candidatos (6,7,5)
candidatos (10,9,8)


// Macarena tiene tres perros de distintas razas y quiere saber cuál de ellos es el más grande. Crea una función que reciba el peso de los tres perros y determine cuál es el más pesado.

function thebigdog  ( wight)

{ if (wight <=15 ) {console.log ("small dog");}
else if ( wight >15 && wight <= 28 ) {console.log("mediom dog");}
else if (wight >28 && wight <= 45) {console.log ("big dog");}
else if (wight >45 && wight <= 60) {console.log ("biggest dog");}

 }

thebigdog (14)
thebigdog (25)
thebigdog (35)

// Camila está organizando un sorteo y cada participante tiene un número. Si el número es divisible por 3, gana un descuento. Si es divisible por 5, recibe un regalo. Si es divisible por ambos, obtiene el premio mayor. Si no es divisible por ninguno, no gana nada. Crea una función que reciba un número entero y determine qué premio le corresponde.


function rafflePrize(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Grand Prize!";
    } else if (number % 3 === 0) {
        return "Discount!";
    } else if (number % 5 === 0) {
        return "Gift!";
    } else {
        return "Nothing!";
    }
}

console.log(rafflePrize(15));
console.log(rafflePrize(9)); 
console.log(rafflePrize(10));
console.log(rafflePrize(7));  





// Bego está repartiendo golosinas entre sus amigos. Si la cantidad de golosinas es un número par, podrá dividirlas equitativamente. Si es impar, sobrará una y alguien tendrá que decidir qué hacer con ella. Crea una función que reciba un número entero y determine si es par o impar, mostrando el mensaje correspondiente.## A sufrir








// Sabrina está planificando un viaje muy especial para celebrar el año nuevo y quiere saber si el año en el que piensa viajar es bisiesto, ya que eso afectará la fecha del viaje. Crea una función que reciba un año como parámetro y determine, siguiendo la regla de que un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400, si es bisiesto ("Es un año bisiesto") o si no lo es ("No es un año bisiesto").






// Abby está hackeando un sistema de seguridad en una misión secreta. Para acceder, debe introducir un código numérico. La puerta solo se abrirá si el número es par y mayor que 50, o si es impar pero un múltiplo de 7. Crea una función que reciba un número y determine si Abby podrá entrar ("Acceso concedido") o si la puerta seguirá bloqueada ("Acceso denegado").








// Macarena está evaluando la salud de sus perros según su peso y edad. Un perro se considera en peso saludable sólo si pesa entre 8 y 30 kg. Además solo se considerará saludable si su edad es un número múltiplo de 3 y menor de 15. Crea una función que reciba el peso del perro y su edad. Determina si está saludable ("El perro está saludable") o si no ("Perro pocho 😢").