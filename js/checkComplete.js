$(document).ready(function(){
  var t;
  startTimer();

  function startTimer(){
    t = setInterval(checkComplete,500);
  }

  function checkComplete(){
     ClearInterval(t);
      if(prx.xdata["data"]["variables"]["smarterscribe_complete"] == "true"){
      
          
          var data = prx.xdata["data"]["variables"];
          
          $.ajax({
                type: "GET",
                 dataType: "json",
                 url: "addrows.php",
                  data: {myData:data},
                  contentType: "application/json; charset=utf-8",
                  success: function(data){
                       alert('Items added');
                  },
                  error: function(e){
                       console.log(e.message);
                 }
      } else {
        startTimer();
      }
  }
  
});
