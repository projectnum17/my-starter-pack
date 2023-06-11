window.onload = function () {
	var myElement = document.getElementById("starter");
	myElement.addEventListener("click", function () {
		rotateElement(myElement);
	});
};

function rotateElement(element) {
	element.style.transform = "rotate(360deg)";
	element.style.transition = "all 1s ease-in-out";
}
