var dynamicid = 1;
document.getElementById("addButton").addEventListener('click',function(){
	var testvalue = document.getElementById("textid").value;
	var createNode = document.createElement("LI");
	var testNode = document.createTextNode(testvalue);
	var buttonElement = document.createElement("BUTTON");
	var buttonText = document.createTextNode("Delete");
	createNode.setAttribute('id','my_li_'+dynamicid);
	buttonElement.setAttribute("style","color:red;font-size:15px;margin-left:15px;");
	buttonElement.setAttribute('class',"deletebtn");
	buttonElement.appendChild(buttonText);
	createNode.appendChild(testNode);
	createNode.appendChild(buttonElement);
	createNode.setAttribute('style',"margin-top : 10px");
	document.getElementById("parentul").appendChild(createNode);
	document.getElementById("textid").value="";
//	console.log(testvalue);
	dynamicid++;
});

document.getElementById("parentul").addEventListener("click",function(e){
		//console.log(e.toElement.parentElement);
		//var innerHTMLli = e.toElement.parentElement.innerHTML;
		//var getInnerHtml = stripHtml(innerHTMLli).replace('Delete','');
		var getId =  e.toElement.parentElement.getAttribute('id');
		
		
		
		console.log(getId);
		if(e.toElement.className=='deletebtn'){
			var innerHTMLli = e.toElement.parentElement.innerHTML;
			//var outerHTMLBtn = e.toElement.outerHTML;
			e.toElement.remove();
			var getInnerHtml= document.getElementById(getId).innerHTML;
			console.log(getInnerHtml);
			//console.log(e);
			//e.toElement.parentElement.remove();
		}
		//if(e.toElement.)
		//if(e.parent)
});

function stripHtml(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}