document.getElementById("addButton").addEventListener('click',function(){
	var testvalue = document.getElementById("textid").value;
	var createNode = document.createElement("LI");
	var testNode = document.createTextNode(testvalue);
	var buttonElement = document.createElement("BUTTON");
	var buttonText = document.createTextNode("Delete");
	
	buttonElement.setAttribute("style","color:red;font-size:15px;margin-left:15px;");
	buttonElement.setAttribute('class',"deletebtn");
	buttonElement.appendChild(buttonText);
	createNode.appendChild(testNode);
	createNode.appendChild(buttonElement);
	createNode.setAttribute('style',"margin-top : 10px");
	document.getElementById("parentul").appendChild(createNode);
	document.getElementById("textid").value="";
//	console.log(testvalue);
});

document.getElementById("parentul").addEventListener("click",function(e){
		//console.log(e.toElement.className);
		if(e.toElement.className=='deletebtn'){
			e.toElement.parentElement.remove()
		}
		//if(e.toElement.)
		//if(e.parent)
});