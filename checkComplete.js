var isDebugging = true;

$(document).ready(function(){

  if (isDebugging){console.log("checkComplete.js document ready");}

  var t;
  startTimer();

  function startTimer(){
    t = setInterval(checkComplete,100);
  }

  function checkComplete(){
     clearInterval(t);
	 var lesson_data = prx;

      if(lesson_data.variables._variables.smarterscribe_complete.value == "true"){
          
          if (isDebugging){console.log("'complete.value' is true");console.log("version is " + lesson_data.variables._variables.version_letter.value)}
		      

          var data = lesson_data.variables._variables;
		  
          $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://reinvention.flvs.net/smarterscribe/addrows.php",
        				hook: lesson_data.variables._variables.hook.value,
        				mainpoint01: lesson_data.variables._variables.mainpoint01.value,
        				mainpoint02: lesson_data.variables._variables.mainpoint02.value,
        				mainpoint03: lesson_data.variables._variables.mainpoint03.value,
        				content01: lesson_data.variables._variables.content01.value,
        				content02: lesson_data.variables._variables.content02.value,
        				content03: lesson_data.variables._variables.content03.value,
                version_letter: lesson_data.variables._variables.version_letter.value,
                data: lesson_data.variables._variables,
                contentType: "application/json; charset=utf-8",
                success: function(data){
                       alert('Items added');},
                  
                 error: function(){
                      console.log("error");
                 }
	  				});
      } else {
        startTimer();
      }
  }
  
});
