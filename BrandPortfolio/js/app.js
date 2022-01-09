


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


var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.style.color="red";
      });
    }
    form.addEventListener("submit", handleSubmit)
