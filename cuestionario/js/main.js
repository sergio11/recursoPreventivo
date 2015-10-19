(function($){

	$(function(){

		var test = new Test("questions");

		test.addQuestion(new Question({
			id:1,
			statement:"Se va a trabajar en la red trenzada situada en el tejado de unos edificios .¿Se necesita la presencia de Recurso Preventivo?",
			img:"img_pregunta_1.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Caso A: No - Caso B: Si',
					feedback:'Caso A: está a más de 2 m, pero NO hay riesgo de caída desde altura, pues el muro la evita. Caso B: está a más de 2 m, hay riesgo de caída desde altura y necesita utilizar equipos de protección individual: arnés y equipos anticaídas.'
				},
				{
					text:'Caso A: No - Caso B: No',
					feedback:'Caso A: está a más de 2 m, pero NO hay riesgo de caída desde altura, pues el muro la evita. Caso B: está a más de 2 m, hay riesgo de caída desde altura y necesita utilizar equipos de protección individual: arnés y equipos anticaídas.'
				},
				{
					text:'Caso A: Si - Caso B: Si',
					feedback:'Caso A: está a más de 2 m, pero NO hay riesgo de caída desde altura, pues el muro la evita. Caso B: está a más de 2 m, hay riesgo de caída desde altura y necesita utilizar equipos de protección individual: arnés y equipos anticaídas.'
				},
				{
					text:'Caso A: Si - Caso B: No',
					feedback:'Caso A: está a más de 2 m, pero NO hay riesgo de caída desde altura, pues el muro la evita. Caso B: está a más de 2 m, hay riesgo de caída desde altura y necesita utilizar equipos de protección individual: arnés y equipos anticaídas.'
				}		
			],
			correctAnswer:0
		}));

		test.addQuestion(new Question({
			id:2,
			statement:"Se van a instalar detectores de falta en los conductores de una línea de MT. la línea está con servicio. Método de trabajo en proximidad de tensión De los siguientes riesgos, por los que se requiere la presencia del Recuerso Preventivo son:",
			img:"img_pregunta_2.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Descargas por contacto eléctrico en AT, Exposición al arco eléctrico en AT y caídas desde altura, necesitan recurso preventivo. ',
					feedback:'El recurso preventivo se debe aplicar en:' + 
					'Descargas por contacto electrónico en Alta Tensión ' +
					'Exposición al arco electrónico en Alta Tensión' +
					'Caídas en altura.' +
					'No se debe aplicar Recurso preventivo en Riesgos de cortes y aplastamientos'
				},
				{
					text:'Descargas por contacto eléctrico en AT, Exposición al arco eléctrico en AT, Riesgo de cortes y aplastamientos y caídas desde altura, necesitan recurso preventivo. ',
					feedback:'El recurso preventivo se debe aplicar en: ' +
					'Descargas por contacto electrónico en Alta Tensión ' +
					'Exposición al arco electrónico en Alta Tensión' +
					'Caídas en altura.' +
					'No se debe aplicar Recurso preventivo en Riesgos de cortes y aplastamientos'
				},
				{
					text:'Descargas por contacto eléctrico en AT y Exposición al arco eléctrico en AT  necesitan recurso preventivo. ',
					feedback:'El recurso preventivo se debe aplicar en:' +
					'Descargas por contacto electrónico en Alta Tensión' +
					'Exposición al arco electrónico en Alta Tensión' +
					'Caídas en altura.' +
					'No se debe aplicar Recurso preventivo en Riesgos de cortes y aplastamientos'
				},
				{
					text:'Caídas en altura y riesgo de cortes y aplastamiento necesitan recurso preventivo.',
					feedback:'El recurso preventivo se debe aplicar en:'+
					'Descargas por contacto electrónico en Alta Tensión'+
					'Exposición al arco electrónico en Alta Tensión'+
					'Caídas en altura.'+
					'No se debe aplicar Recurso preventivo en Riesgos de cortes y aplastamientos'
				}		
			],
			correctAnswer:0
		}));

		test.addQuestion(new Question({
			id:3,
			statement:"Trabajo: Pruebas de las protecciones propias, situadas en la parte superior de un transformador de potencia. ¿Se necesita la presencia de Recurso Preventivo?",
			img:"img_pregunta_3.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Si',
					feedback:'Hay riesgo de caídas desde altura, en el acceso y descenso por la escalera y los trabajos en la tapa'
				},
				{
					text:'No',
					feedback:'Hay riesgo de caídas desde altura, en el acceso y descenso por la escalera y los trabajos en la tapa'
				}	
			],
			correctAnswer:0
		}));

		test.addQuestion(new Question({
			id:4,
			statement:"Trabajo: Pruebas de las protecciones propias, situadas en la parte superior de un transformador de potencia. ¿Se necesita la presencia de Recurso Preventivo?",
			img:"img_pregunta_4.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Si',
					feedback:'Hay riesgo de caídas desde altura, en el acceso y descenso por la escalera y los trabajos en la tapa'
				},
				{
					text:'No',
					feedback:'Hay riesgo de caídas desde altura, en el acceso y descenso por la escalera y los trabajos en la tapa'
				}	
			],
			correctAnswer:0
		}));

		test.addQuestion(new Question({
			id:5,
			statement:"Trabajo: Pruebas de las protecciones propias, situadas en la parte superior de un transformador de potencia. ¿Cuáles son las fases de trabajo a las que el Recurso Preventivo deberá prestar atención?",
			img:"img_pregunta_5.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Al acceso por la escalera y al trabajo sobre la tapa',
					feedback:'El recurso preventivo debe prestar atención a toda acción que conlleve riesgo de caída de altura, es decir, al acceso, descenso y sujeción por la escalera, y al trabajo sobre la tapa.'
				},
				{
					text:'Sujeción de la escalera,Acceso por la escalera,Trabajo sobre la tapa',
					feedback:'El recurso preventivo debe prestar atención a toda acción que conlleve riesgo de caída de altura, es decir, al acceso, descenso y sujeción por la escalera, y al trabajo sobre la tapa.'
				},
				{
					text:'Trabajo sobre la tapa',
					feedback:'El recurso preventivo debe prestar atención a toda acción que conlleve riesgo de caída de altura, es decir,  al acceso, descenso y sujeción por la escalera, y al trabajo sobre la tapa.'
				},
				{
					text:'Sujeción de la escalera, Acceso por la escalera, Trabajo sobre la tapa, Descenso por la escalera',
					feedback:'El recurso preventivo debe prestar atención a toda acción que conlleve riesgo de caída de altura, es decir, al acceso, descenso y sujeción por la escalera, y al trabajo sobre la tapa'
				}	
			],
			correctAnswer:3
		}));

		test.addQuestion(new Question({
			id:6,
			statement:"Trabajo: Maniobras en una línea aérea de MT.",
			img:"img_pregunta_6.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Si',
					feedback:'La respuesta es correcta, debido a que hay riesgos de: Descargas por contacto eléctrico AT.'
				},
				{
					text:'No',
					feedback:'La respuesta es incorrecta, debido a que hay riesgos de: Descargas por contacto eléctrico AT.'
				}
			],
			correctAnswer:0
		}));
		
		$("#test").on("submit",function(e){
			e.preventDefault();
			e.stopPropagation();
			//Corregimos respuesta.
			test.checkQuestion();
		}).on("change",function(){
			$(this).find(":submit").removeAttr('disabled');
		}).on("new_question reset_question",function(){
			$(this).find(":submit").attr('disabled','disabled');
		}).on("test_ended",function(){
			$(this).hide();
		});

		$("#exit").on("click",function(e){
			e.preventDefault();
			e.stopPropagation();
			test.exit();
		});

		//Iniciamos el test.
		test.start();


	});

})(jQuery);