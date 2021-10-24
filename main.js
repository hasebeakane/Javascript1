(function(){
  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  
  var startTime;
  var elapsedTime = 0;
  var timerId;
  var timeToadd = 0;
  
  function updateTimetText(){
     var h = Math.floor(elapsedTime / 60000 / 60)
     var m = Math.floor(elapsedTime / 60000);
     var s = Math.floor(elapsedTime % 60000 / 1000)
     var ms = elapsedTime % 1000;
     
     ms = ('0' + ms).slice(-1);
     
     timer.innerText = h + ':' + m + ':' + s + ':' + ms;
  }
  
  function countUp(){
     timerId = setTimeout(function(){
         elapsedTime = Date.now() - startTime + timeToadd;
         updateTimetText()
         countUp();
    
  },10);
      
  }
  
   start.addEventListener('click',function(){
       startTime = Date.now();
       countUp();
       start.disabled = true;
       stop.disabled = false;
       reset.disabled = false;
   });
   
   
   
   stop.addEventListener('click',function(){
       clearTimeout(timerId);
       timeToadd += Date.now() - startTime;
       start.disabled = false;
       stop.disabled = true;
       reset.disabled = false;
       
   });
   
   reset.addEventListener('click',function(){
       clearTimeout(timerId);
       elapsedTime = 0;
       timeToadd = 0;
       updateTimetText();
       start.disabled = false;
       reset.disabled = true;
   });
})();