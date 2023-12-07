function menuShow(){
	let menuMobile = document.querySelector(".navBar ul");
	if (menuMobile.classList.contains("open")){
		menuMobile.classList.remove("open");
	}
	else{
		menuMobile.classList.add("open");
	}
}

const openForm = document.querySelector(".section1");
const openLogin = document.querySelector(".loginBtn0");
const openLogin1 = document.querySelector(".loginBtn");
const closeLogin = document.querySelector("#close");
openLogin.addEventListener("click", () => {
	openForm.style.opacity = 1;
	openForm.style.transition = "0.1s";
});
openLogin1.addEventListener("click", () => {
	openForm.style.opacity = 1;
	openForm.style.transition = "0.1s";
});
closeLogin.addEventListener("click", () => {
	openForm.style.opacity = 0;
	openForm.style.transition = "0.1s";
});