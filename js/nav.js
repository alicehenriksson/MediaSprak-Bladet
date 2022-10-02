/*Sidebar and opacity trick*/
function openNav() {
	document.getElementById("mySidenav").style.width = "var(--menu-width)";
   document.getElementById("mySidenav").style.left = "0";
	document.body.style.overflow = "hidden";
	//document.getElementById("main").style.marginLeft = "var(--push-site)";
	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("mySidenav").style.left = "-250px";
	document.body.style.overflow = "auto";
	//document.getElementById("main").style.marginLeft = "0";
	//document.body.style.backgroundColor = "";
}
/*Dropdowns*/
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  	dropdown[i].addEventListener("click", function() {
    	this.classList.toggle("active");
		this.firstElementChild.classList.toggle("fa-caret-open");

	 	var dropdownContent = this.nextElementSibling;

    	if (dropdownContent.style.display === "block") {
      	dropdownContent.style.display = "none";
    	} else {
      	dropdownContent.style.display = "block";
    	}
  	});
}
