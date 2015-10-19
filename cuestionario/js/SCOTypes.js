var Question = (function($){
	
	var self;
	var score_question = 1;

	function Question(data){

		this.id = data.id;
        this.statement = data.statement;
        this.img = data.img;
        this.type = data.type;
        this.answers = data.answers || [];
        this.correctAnswer = data.correctAnswer || 0;
        this.fails = 0;
        this.totalTimeAllowed = data.totalTimeAllowed || 0;
        this.startTime = 0;
        this.totalTime = 0;
        this.$view = null;
	}

	//Constantes de clase.
	Question.QUESTION_TYPE_CHOICE = "choice";
    Question.QUESTION_TYPE_TF = "true-false";
    Question.QUESTION_TYPE_NUMERIC = "numeric";

	//Muestra la pregunta en un contendor indicado.
	Question.prototype.renderTo = function($container) {

		this.startTime = new Date().getTime();

		if (!$container.children("#"+this.id).length) {

			$question = $("<div>",{id:this.id}).append(
				$("<figure>",{class:'figure'}).append(
					$("<div>",{class:'photo'}).append(
						$("<img>",{src:'imagenes/'+this.img})
					),
					$("<figcaption>",{class:'desc',text:this.statement})
				)
			);

			switch (this.type){
	            case Question.QUESTION_TYPE_CHOICE:
	            	$answers = $("<div>",{class:'answers'}); 
	            	//Pregunta del elección múltiple
	            	for(var i = 0,len = this.answers.length; i < len; i++){
	            		var idAnswer = this.id+"_answer_"+i;
	            		$("<div>",{class:'answer'}).append(
	            			$("<input>",{id:idAnswer,type:'radio',name:'answers',value:i}),
	            			$("<label>",{'for':idAnswer,text:this.answers[i].text})
	                    ).appendTo($answers);
	            	}

	            	$answers.appendTo($question);
	            	break;
	            case Question.QUESTION_TYPE_TF:
	            	break;
	            case Question.QUESTION_TYPE_NUMERIC:
	            	break;
	            default:
	                throw new Error("Invalid type question");
	                break;
        	}
        	//Mostramos la pregunta.
        	$container.children().hide().end().append($question);

        	this.$view = $question;

		}else{
			$container.children("#"+this.id).show().siblings().hide();
		}
		
	};

	Question.prototype.getCheckedAnswerFeedback = function() {
		var checked = $("#"+this.id + ' input:radio:checked').val();
		return this.answers[checked].feedback;
	};


	//Comprueba si se ha contestado correctamente.
	Question.prototype.isCorrect = function() {
		var checked = $("#"+this.id + ' input:radio:checked').val();
		var error = false;
		if (this.correctAnswer != parseInt(checked)) {
			error = true;
			this.fails += 1;
		}
		return !error;
	};

	Question.prototype.finish = function() {
		this.totalTime = new Date().getTime() - this.startTime;
	};

	Question.prototype.reset = function() {
		//Desmarcamos respuestas para este pregunta.
		this.$view.find("input:radio").removeAttr("checked");
		//Notificamos al formulario que la pregunta fue reseteada.
		this.$view.parent().trigger("reset_question");
	};

	//Devuelve puntuación para esta pregunta.
	Question.prototype.getScore = function() {
		return this.fails < (this.answers.length - 1) ? score_question - (this.fails * (score_question / (this.answers.length - 1))) : 0;
	};


	return Question;

})(jQuery);


var Test = (function($){

	//Guarda el índice de la pregunta actual.
	var current = null;
	var startTimeStamp = null;
	//creating shortcut for less verbose code
	var scorm = pipwerks.SCORM;
	var self = null;
	var $checkoutBar = null;

	function Test(container,questions){
		self = this;
		this.questions = questions || [];
		this.container = $("#"+container);
		$checkoutBar = $("#checkout-bar");
	}

	var saveElapsedTime = function(){
		if (startTimeStamp != 0 ){
	      var currentTimestamp = new Date().getTime();
	      var elapsedMiliSeconds = (currentTimestamp - startTimeStamp);
	      var formattedTime = pipwerks.UTILS.convertTotalMiliSeconds(elapsedMiliSeconds);
	   }else{
	      formattedTime = pipwerks.UTILS.convertTotalMiliSeconds(0);
	   }

	   scorm.SetSessionTime(formattedTime);
	}


	var getBookMark = function(callback){
		 // si el usuario almacena un marcador previamente (no comprobar si hay errores
         // porque cmi.location no puede ser inicializado
		var bookmark = scorm.get("cmi.suspend_data");
		var question = null;
        if (bookmark){

        	swal({
        		title: "¿Restaurar sesión?",
        		text: "¿Te gustaría reanudar desde donde lo dejó anteriormente?",
        		type: "info",
        		showCancelButton: true,
        		confirmButtonText: "Si",
        		cancelButtonText: "No",
        		closeOnConfirm: false,
        		closeOnCancel: true 
        	}, function(isConfirm){
        		if (isConfirm){
        			//si hay un bookmark almacenado, preguntamos al usuario para reanudar desde la pregunta anterior
        			question = parseInt(bookmark, 10);
        			swal("Restaurada !", "Su sesión fue restaurada", "success");
        		}

        		typeof(callback) == "function" && callback(question);
        	});
            
  
        }else{
        	typeof(callback) == "function" && callback(question);
        }
	}

	var saveScore = function(){

		var total_score = 0;
		self.questions.forEach(function(question){
			total_score += question.getScore();
		});

		//maximum value in the range
		scorm.SetScoreMax(self.questions.length);
		//minimum value in the range
		scorm.SetScoreMin(0);
		//Identifies the learner’s score for the SCO.
		scorm.SetScoreRaw(total_score);
        
        var scaled_score = Math.round(total_score / self.questions.length * 100);
		console.log("Scaled Score : " + scaled_score);
		swal({
			title: "Test Finalizado!",
			text: "Felicidades, has finalizado el test con una puntación de : " + scaled_score + "%",
			imageUrl: "imagenes/thumbs-up.jpg" 
		});

		//scorm.SetSuccessStatus("passed");
		//self.exit();


	}

	var createcheckoutBar = function(){
		var $fragment = $(document.createDocumentFragment());
		for (var i = 1,len = self.questions.length; i <= len; i++) {
			$fragment.append(
				$("<li>").append(
					$("<span>",{text:i})
				)
			)
		}
		$checkoutBar.append($fragment).children(":eq(0)").addClass("first");
	}

	var isLastQuestion = function() {
		return current >= Object.keys(self.questions).length - 1;
	};


	/*var recordTest = function(score){
        ScormProcessSetValue("cmi.score.raw", score);
        ScormProcessSetValue("cmi.score.min", "0");
        ScormProcessSetValue("cmi.score.max", "100");
        
        var scaledScore = score / 100;
        ScormProcessSetValue("cmi.score.scaled", scaledScore);
        
        //consider 70% to be passing
        if (score >= 70){
            ScormProcessSetValue("cmi.success_status", "passed");
        }
        else{
            ScormProcessSetValue("cmi.success_status", "failed");
        }
    }*/

	//Carga una pregunta indetificada por su id.
	Test.prototype.goTo = function(i) {
		if(this.questions[i]){
			//Guardamos el índice de la pregunta actual.
			current = i;
			//Renderizamos pregunta en el contenedor.
			this.questions[i].renderTo(this.container);
			//Guardamos la pregunta actual en el CMI datamodel.
			scorm.set("cmi.suspend_data",i);
			//Actualizamos Barra de Progreso.
			$checkoutBar.children().eq(i).addClass("active").prevAll().addClass("visited");
			this.container.parent().trigger("new_question");
		}
	};

	

	Test.prototype.checkQuestion = function() {

		var question = this.questions[current];
		//Comprobamos si la pregunta actual es correcta.
		if (question.isCorrect()) {
			//Permite saber si es la última pregunta.
			var last_question = isLastQuestion();
			
			swal({
				title: "Respuesta Correcta!",
				text: question.getCheckedAnswerFeedback(),
				type: "success",
				closeOnConfirm: !last_question,
			},function(){
				//Comprobamos si es la última pregunta.
				if (!last_question) {
					self.next();
				}else{
					saveScore();
				}
			});

		}else{
			swal("Respuesta Incorrecta!", question.getCheckedAnswerFeedback(), "error");
			question.reset();
		}
	};

	//Avanza a la siguiente pregunta.
	Test.prototype.next = function() {
		this.goTo(++current);	
	};

	Test.prototype.prev = function() {
		this.goTo(--current);
	};

	Test.prototype.addQuestion = function(question){
		if (question instanceof Question) {
			this.questions.push(question);
		};
    }

    //Inicia el test.
    Test.prototype.start = function() {
    	//Creamos la barra de progreso.
    	createcheckoutBar();
    	//Iniciamos sesión de comunicación con el LMS.
    	scorm.init();
    	var status = scorm.GetCompletionStatus();
    	//it's a best practice to set the completion status to incomplete when
        //first launching the course (if the course is not already completed)
        if (status == "unknown"){
            scorm.SetCompletionStatus("incomplete");
        }
        startTimeStamp = new Date();
        //Mediante el valor de entry, sabremos si el usuario está iniciado la OCS por primera vez
        // o si está retomando un intento previo.
        var entry = scorm.data.get("cmi.core.entry");
        if (entry == "resume") {
        	getBookMark(function(question){
	        	if (question) {
	        		self.goTo(question);
		        }else{
		        	self.goTo(0);
		        }
        	});
        }else{
        	
        	self.goTo(0);
        }



    };
    
    //Permite salir del test
    Test.prototype.exit = function() {
    	var status = scorm.GetSuccessStatus();
    	if(status === "completed"){
			scorm.SetExit("logout");
	   	} else {

	   		swal({
	   			title: "¿Estás seguro?",
	   			text: "¿Quieres guardar tu progreso?",
	   			type: "warning",
	   			showCancelButton: true,
	   			confirmButtonColor: "#DD6B55",
	   			confirmButtonText: "Guardar y Salir",
	   			closeOnConfirm: false
	   		},function(isConfirm){
	   			//Establecemos cmi.exit a suspend.
	   			if (isConfirm) {
	   				scorm.SetExit("suspend");
					saveElapsedTime();
					scorm.save();   
		   			swal("Guardado!", "Su progreso se ha guardado con éxito", "success");
		   			scorm.quit(); 
	   			}else{
	   				scorm.SetExit("");
	   				scorm.quit();
	   			}
				
	   		});

	   	}
    };

	return Test;

})(jQuery);