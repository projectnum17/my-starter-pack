const addEventOnElements = function (elements, eventType, callback) {
	for (let i = 0, len = elements.length; i < len; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {
	x = (event.clientX / window.innerWidth) * 10 - 5;
	y = (event.clientY / window.innerHeight) * 10 - 5;

	// reverse the number eg. 20 -> -20, -5 -> 5
	x = x - x * 2;
	y = y - y * 2;

	for (let i = 0, len = parallaxItems.length; i < len; i++) {
		x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
		y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
		parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
	}
});
