




var para = document.createElement("button");
para.id = "pasta1";
var t = document.createTextNode("Switch to percentage chance");
para.appendChild(t);
document.body.appendChild(para); 

document.getElementById("pasta1").onclick = function() { 
	replace(); 
};


function replace(){
	var x = document.getElementsByClassName("bet-button-price");

	console.log(x.length);
	for(var i = 0; i <= x.length; i++){
		
		x[i].innerHTML = (100/parseFloat(x[i].innerHTML)).toFixed(2);
	}
}


