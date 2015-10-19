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
			id:5,
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


		test.addQuestion(new Question({
			id:6,
			statement:"Trabajo: Maniobras en una línea aérea de MT.",
			img:"img_pregunta_7.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'No hay deficiencias, pero si las hubiera, habría que comunicarlo al responsable.',
					feedback:'El recurso preventivo debe comunicar las deficiencias de placa de identificación y el soporte posapies a su responsable para subsanarlas.'
				},
				{
					text:'Está rota la placa de identifiacion de los seccionadores y falta el soporte posapies. Comunicará las deficiencias, a su responsable directo, para subsanarlas.',
					feedback:'El recurso preventivo debe comunicar las deficiencias de placa de identificación y el soporte posapies a su responsable para subsanarlas.'
				},
				{
					text:'Falta el soporte posapies. Se debe comunicar la deficiencia al responsable directo, para subsanarlas.',
					feedback:'El recurso preventivo debe comunicar las deficiencias de placa de identificación y el soporte posapies a su responsable para subsanarlas.'
				},
				{
					text:'Esta rota la placa de identifiacion de los seccionadores y falta el soporte posapies. ',
					feedback:'El recurso preventivo debe comunicar las deficiencias de placa de identificación y el soporte posapies a su responsable para subsanarlas.'
				}
			],
			correctAnswer:1
		}));

		test.addQuestion(new Question({
			id:7,
			statement:"Trabajo: En un apoyo de una línea aérea de MT, hay que elevar y orientar la antena de un equipo de comunicaciones: Método de trabajo: Trabajos en proximidad de tensión  Equipo de trabajo: Dos trabajadores cualificados.",
			img:"img_pregunta_8.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'No, debido a que el equipo esta compuesto por dos trabajadores que se ayudan mutuamente.',
					feedback:'Existen riesgos de descargas por contacto eléctrico AT.'
				},
				{
					text:'Sí',
					feedback:'Es debido a que hay riesgos de descargas por contacto eléctrico AT.'
				},
				{
					text:'No.',
					feedback:'Existen riesgos de descargas por contacto eléctrico AT.'
				}
			],
			correctAnswer:1
		}));

		test.addQuestion(new Question({
			id:8,
			statement:"Trabajo: En un apoyo de una línea aérea de MT, hay que elevar y orientar la antena de un equipo de comunicaciones: Método de trabajo: Trabajos en proximidad de tensión - Equipo de trabajo: Dos trabajadores cualificados.",
			img:"img_pregunta_9.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'De la empresa que no realiza el trabajo.',
					feedback:'El recurso preventivo pertenece a la empresa que realiza los trabajos.'
				},
				{
					text:'De la empresa propietaria de la línea.',
					feedback:'El recurso preventivo pertenece a la empresa que realiza los trabajos.'
				},
				{
					text:'De la empresa propietaria de la línea con colaboración de la empresa que realiza los trabajos. El Recurso Preventivo debe ser de ambas empresas.',
					feedback:'El recurso preventivo pertenece a la empresa que realiza los trabajos.'
				},
				{
					text:'De la empresa que realiza el trabajo, El Recurso Preventivo debe ser de la empresa que realiza los trabajos.',
					feedback:'El recurso preventivo pertenece a la empresa que realiza los trabajos.'
				}
			],
			correctAnswer:3
		}));

		test.addQuestion(new Question({
			id:9,
			statement:"El cuadro de BT tiene rota una de las protecciones aislante y falta otra. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.Teniendo en cuenta el Cuándo, a Quién y Cómo debe hacer las correciones e indicaciones...",
			img:"img_pregunta_10.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Una vez compruebe si existe peligro.',
					feedback:'El recurso preventivo tiene que realizar su función en una etapa previa a la comprobación.'
				},
				{
					text:'Nada más ver la deficiencia.',
					feedback:'El recurso preventivo tiene que realizar su función cuando se reconozca una deficiencia.'
				}
			],
			correctAnswer:1
		}));

		test.addQuestion(new Question({
			id:10,
			statement:"El cuadro de BT tiene rota una de las protecciones aislante y falta otra. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.Teniendo en cuenta el Cuándo, a Quién y Cómo debe hacer las correciones e indicaciones...",
			img:"img_pregunta_11.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Indicando el estado de la protección.',
					feedback:'El recurso preventivo debe indicar el estado del lugar de trabajo cuando existan riesgos.'
				},
				{
					text:'No es necesario indicar estado alguno, de eso se encarga el responsable directo.',
					feedback:'El recurso preventivo debe indicar el estado del lugar de trabajo cuando existan riesgos.'
				}
			],
			correctAnswer:0
		}));

		test.addQuestion(new Question({
			id:11,
			statement:"El cuadro de BT tiene rota una de las protecciones aislante y falta otra. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.Teniendo en cuenta el Cuándo, a Quién y Cómo debe hacer las correciones e indicaciones...",
			img:"img_pregunta_12.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Al resto de trabajadores para que no se produzcan situaciones de peligro.',
					feedback:'El recurso preventivo debe informar al trabajador y al responsable para subsanar las deficiencias.'
				},
				{
					text:'Al trabajador e informando al responsable directo del Recurso Preventivo para subsanar la incidencia.',
					feedback:'El recurso preventivo debe informar al trabajador y al responsable para subsanar las deficiencias.'
				}
			],
			correctAnswer:1
		}));

		test.addQuestion(new Question({
			id:12,
			statement:"El cuadro de BT tiene rota una de las protecciones aislante y falta otra. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.Teniendo en cuenta el Cuándo, a Quién y Cómo debe hacer las correciones e indicaciones...",
			img:"img_pregunta_13.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Cuando observe que los guantes no son los adecuados.',
					feedback:'El recurso preventivo debe informar cuando existan deficiencias que conlleven riesgos de alta tensión en este caso.'
				},
				{
					text:'Cuando el trabajador se ponga a trabajar con la maneta extractora.',
					feedback:'El recurso preventivo debe informar cuando existan deficiencias que conlleven riesgos de alta tensión en este caso.'
				}
			],
			correctAnswer:0
		}));

		test.addQuestion(new Question({
			id:13,
			statement:"El cuadro de BT tiene rota una de las protecciones aislante y falta otra. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.Teniendo en cuenta el Cuándo, a Quién y Cómo debe hacer las correciones e indicaciones...",
			img:"img_pregunta_14.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Recomendando al responsable del Recurso Preventivo que compre nuevos aislantes.',
					feedback:'La función del recurso preventivo es informar al responsable de las deficiencias, pero en este caso no existen deficiencias en el material. El trabajador no está tomando las medidas adecuadas, es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				},
				{
					text:'Recomendando al trabajador el uso de guantes aislantes de BT.',
					feedback:' El trabajador no está tomando las medidas adecuadas, es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				}
			],
			correctAnswer:1
		}));
		
		test.addQuestion(new Question({
			id:14,
			statement:"Para crear la zona de TET, cubre una parte del cuadro con un trapo blanco limpio. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.",
			img:"img_pregunta_15.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Al ver que el trabajador va a utilizar un trapo para aislar partes en tensión.',
					feedback:'Es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				},
				{
					text:'No es necesaria ninguna intervención en este caso.',
					feedback:'Es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				}
			],
			correctAnswer:0
		}));


		test.addQuestion(new Question({
			id:15,
			statement:"Para crear la zona de TET, cubre una parte del cuadro con un trapo blanco limpio. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.",
			img:"img_pregunta_16.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Al responsable directo.',
					feedback:'No es responsabilidad del Recurso Preventivo informar al responsable cuando no existan deficiencias en los materiales de trabajo. Sí es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				},
				{
					text:'Al trabajador. Recomendándole que utilice un elemento aislante adcuado: Tela vinílica.',
					feedback:'Es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				}
			],
			correctAnswer:1
		}));

		test.addQuestion(new Question({
			id:16,
			statement:"Las herramientas que utiliza para realizar los TET, una no está aislada. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.",
			img:"img_pregunta_17.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'No es necesario.',
					feedback:'Es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				},
				{
					text:'Al ver que utiliza una herramineta que no está aislada.',
					feedback:'Es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				}
			],
			correctAnswer:1
		}));

		test.addQuestion(new Question({
			id:17,
			statement:"Las herramientas que utiliza para realizar los TET, una no está aislada. El recurso Preventivo, deberá hacer las correciones e indicacciones necesarias.",
			img:"img_pregunta_18.png",
			type:Question.QUESTION_TYPE_CHOICE,
			answers:[
				{
					text:'Al trabajor, recomendándole el uso de herramientas aisladas.',
					feedback:'Es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
				},
				{
					text:'Al responsable de las herramientas.',
					feedback:'No es responsabilidad del Recurso Preventivo informar al responsable cuando no existan deficiencias en los materiales de trabajo. Sí es función del recurso preventivo advertir al trabajador sobre los materiales más adecuados para trabajar.'
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