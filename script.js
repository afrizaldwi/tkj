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
