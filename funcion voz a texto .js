var recognition;
	var recognizing = false;

	function procesar(comp) {

var id = comp.id;
		if (recognizing == false) {

	if (!('webkitSpeechRecognition' in window)) {
		alert("¡API no soportada!");
	} else {

		recognition = new webkitSpeechRecognition();
		recognition.lang = "es-PE";
		recognition.continuous = true;
		recognition.interimResults = true;

			recognition.start();
			recognizing = true;
			console.log(id);
			document.getElementById(id).innerHTML = "Detener";
			console.log("inicia la funcion");
						
				recognition.onstart = function() {
			recognizing = true;
			console.log("empezando a eschucar");

		
		}
	}
		} else {
			recognition.stop();
			recognizing = false;
			document.getElementById(id).innerHTML = "Hablar";
			



recognition.onresult = function(event) {

		 for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal)

				document.getElementById("txt"+id).value += event.results[i][0].transcript;
		    }
		
			//texto
		}

recognition.onend = function() {
			recognizing = false;
			document.getElementById(id).innerHTML = "Hablar";
			console.log("terminó de eschucar, llegó a su fin");

		}

		}


	}
