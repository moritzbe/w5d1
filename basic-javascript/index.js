
var car1 = document.querySelector("#car1");
console.log(car1);
var car2 = document.querySelector("#car2");
console.log(car2);




window.onkeyup = function(e) {
      var key = e.keyCode;
      var newParent = document.getElementById('1');
      var oldParent = document.getElementById('0');

         if (key == 38) {
            
            newParent.appendChild(oldParent.firstChild);



         } else if (key == 40) {
         	//move other car right
            newParent.appendChild(oldParent.firstChild);
         }
};






      // car.addEventListener("click", function(){
      // 	console.log("clicked");
      // 	var field = document.getElementById(this.id);
      // 	console.log(field);
      // 	this.innerHTML("");
 



      	

      	// myDiv = document.getElementById("content");

       //  myDiv.innerHTML = myText
       

      // var b = $("#button");
      // b.on("click", function() {
      // 	$("#content").html("Hello World");
      // };
      // )//on is the addEventListener, expressed just simpler, but of xcourse load jquery