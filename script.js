const navbarNav = document.getElementById("navbarNav");
const navbarCollapse = document.getElementById("navbarCollapse");

navbarCollapse.addEventListener("click", () => {
	navbarNav.classList.toggle("navbar-show");
});

let slideIndex = 1;

// carousel
const slides = document.querySelectorAll(".slide");

const showSlide = (num) => {
	num > slides.length ? (slideIndex = 1) : undefined;
	num < 1 ? (slideIndex = slides.length) : undefined;

	for (const wrap of slides) {
		wrap.classList.remove("active");
	}

	slides[slideIndex - 1].classList.add("active");
};

showSlide(slideIndex);

const btnNext = document.getElementById("btnNext");

btnNext.addEventListener("click", () => {
	slideIndex += 1;
	showSlide(slideIndex);
});

const btnPrevious = document.getElementById("btnPrevious");

btnPrevious.addEventListener("click", () => {
	slideIndex -= 1;
	showSlide(slideIndex);
});

setInterval(() => {
	slideIndex -= 1;
	showSlide(slideIndex);
}, 5000);

// contact
const scriptURL =
	"https://script.google.com/macros/s/AKfycbzkr1IaURMGpfMMTzxsX_DJFwNmeUHUdi75t2TnsXrla5TkedcfC5NCBRioBOQdwalU/exec";
const form = document.forms["contact-form"];

const btnKirim = document.getElementById("btnKirim");
const btnLoading = document.getElementById("btnLoading");
const alert = document.getElementById("alert");
const alertWarning = document.querySelector(".warning");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	btnKirim.classList.toggle("d-none");
	btnLoading.classList.toggle("d-none");
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			alert.classList.toggle("d-none");
			btnKirim.classList.toggle("d-none");
			btnLoading.classList.toggle("d-none");

			form.reset();
			console.log("Success!", response);
		})
		.catch((error) => {
			alertWarning.classList.toggle("d-none");
			console.error("Error!", error.message);
		});
});

const exit = document.getElementById("exit");
exit.addEventListener("click", () => {
	alert.classList.add("d-none");
});
