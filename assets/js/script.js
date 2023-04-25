//Crear un objeto modal para poder manipularlo en JS, usando el id de mi aviso en HTML
var aviso = new bootstrap.Modal(document.getElementById('aviso'), {
  keyboard: false
});

//identificar el cuerpo del modal para escribir
document.getElementById("avisoTxt").innerHTML = `Pasajero, se le recuerda que para abordar el avión debe tener en
  mano su pasaporte y su boleto de embarque. Manténgase atento a los
  avisos mediante esta plataforma.`

//mostrar el modal
aviso.show();

//obtener la fecha y hora, y separar en variables día, mes, año, horas, minutos

var fechaActual = new Date();

var dd = fechaActual.getDate();
var mm = fechaActual.getMonth()+1;
var yyyy = fechaActual.getFullYear();
var hh = fechaActual.getHours();
var mimi = fechaActual.getMinutes();
/* console.log(dd);
console.log(mm);
console.log(yyyy);
console.log(hh);
console.log(mimi); */
//minutos puede ser un dígito, agregar un 0 al ser el caso
if (mimi < 10) {
  mimi = '0'+mimi
}
/* console.log(mimi); */

//Los vuelos, número de vuelo random de 4 digitos y terminal rándom de 1 al 20

var nVuelo = getRndInteger(1000, 9999)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var nTerminal = getRndInteger(1, 20)


//escribir a las otras cajas

document.getElementById("bienvenido").innerHTML = `<h1>Bienvenido a la plataforma Eport</h1>
<p>
  Aquí podrá encontrar la información de vuelos más reciente de
  nuestro aeropuerto.
</p>`

document.getElementById("fecha").innerHTML = `<p>Fecha:</p>
<h1>${dd}-${mm}-${yyyy}</h1>`

document.getElementById("hora").innerHTML = `<p>hora:</p>
<h1>${hh}:${mimi}</h1>`

document.getElementById("vuelo").innerHTML = `<h1>El vuelo más próximo:</h1>
<p>Número de vuelo: ${nVuelo}</p>
<p>Terminal: ${nTerminal}</p>`
