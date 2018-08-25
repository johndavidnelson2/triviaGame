var number = 30;
var intervalId;
var right=0;
var wrong=0;
//setTimeout(timeUp, 1000 * 30);

//function timeUp(){
//    console.log("time is up");
//}
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
function decrement() {

    //  Decrease number by one.
    number--;
    console.log(number);

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }
  function stop() {
    if(document.getElementById("fastestLand").value === "cheetah"){
        //alert ("True");
      right ++;
      } else {
        //alert ("False")
        wrong ++;    
      }
      if(document.getElementById("largest").value === "blueWhale"){
        //alert ("True");
      right ++;
      } else {
        //alert ("False")
        wrong ++;    
      }
      if(document.getElementById("fastestWinged").value === "peregrineFalcoln"){
      right ++;
      } else {
        wrong ++;    
      }
      alert (right + " right and "+ wrong +" wrong.");
      $("#score").html("<h2>" + right + " right and "+wrong+ " wrong." +"</h2>");
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }
  run();