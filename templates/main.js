
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}


function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(id) {
    var field = document.getElementById(id).value;
    var getParentDiv = document.getElementById("email-div");
    var pTag = getParentDiv.getElementsByTagName("P");

    if (field.trim().length == 0) {
        
        pTag[0].innerHTML = "E-mail field cannot be left empty.";
		pTag[0].style.color = "red"
		pTag[0].style.display = "block";
		pTag[0].style.textAlign = "right"
        return false;
    } else if (!emailRegEx.test(field)) {
        pTag[0].style.display = "block";
		pTag[0].style.color = "blue"
        pTag[0].innerHTML = "Please enter a valid e-mail address.";
		
		
        return false;
    } else if (emailRegEx.test(field)) {
        pTag[0].style.display = "none";
		
        return true;
    }
}
