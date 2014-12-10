// JavaScript Document


$(document).ready(function(e){
	//watchID de refiere a la aceleracion 'actual'
   //
   var watchID = null;
   
   document.addEventListener("deviceready", Dispositivo_Listo, false);
   
   
   //cuando esta listo el dispositivo
  //
   function Dispositivo_Listo() {
	   Comienza();
   }
   
   //Empieza la 'observacion' de la aceleracion
   //
   function Comienza() {
	   
	   // Actualiza la aceleracion cada 2 segundos
	  //
	   var opcions = { frequency: 2000 };
	   
	   watchID = navigator.accelerometro.watchAcceleracion(Correcto, Error, opciones);
	   navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
   }
   
    // Detiene la 'observacion' de la aceleracion
   //
    function Detente() {
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	// Correcto: Toma una captura de la aceleracion
   //
    function Correcto(acceleration) {
		var element = document.getElementById('acelerometro');
		
		element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />' +
		                    'Aceleracion en Y: ' + acceleration.y + '<br />' +
							'Aceleracion en Z: ' + acceleration.z + '<br />' +
							'Intervalo: '      + acceleration.timestamp + '<br />';
	}
	
	// Error: Falla al obtener la aceleracion
	//
	function Error() {
		alert('Error!');
	}
  // Exito al localizar
	   
   function Localiza(posicion) {
	   var element = document.getElementById('geolocalizacion');