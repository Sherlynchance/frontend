function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.classList.add("slideInLeft", true);
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
	}
}

function mySecondFunction() {
	var x = document.getElementById("right_sidebar");
	if (x.style.display === "none") {
		x.classList.add("slideInRight");
		x.style.display = "block";
	} else {
		x.style.display = "none";
		}
}

function myThirdFunction() {
	var x = document.getElementById("search_responsive");
	if (x.style.display !== 'block') {
		x.classList.add("bounceInDown");
		x.style.display = "block";
		x.style.padding = "15px";
		
	} else {	
		x.style.display = "none";	
	}
}

function myFourthFunction() {
	var x = document.getElementById("notifs");
if (x.style.display !== 'block') {	
	x.style.display = "block";	
} else {
	x.style.display = "none";	
	}
}


