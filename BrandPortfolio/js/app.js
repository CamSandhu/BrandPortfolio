


var menuBar = document.getElementsByClassName("menu-btn");

var mobileMenu = document.getElementsByClassName("mobile-menu");

menuBar[0].addEventListener("click", function() {
	mobileMenu[0].classList.toggle("active");
	
});



function changeEdImage(x) {
	if (x.matches) {
		document.getElementById("edImg").src = "img/circles-line-mobile.png";
       
	} else {
		document.getElementById("edImg").src = "img/circles-lines.png";
	}
}

var media = window.matchMedia("(max-width: 960px)")

changeEdImage(media);
media.addListener(changeEdImage);


