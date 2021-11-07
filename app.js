

function toggleNav(nav, navText) {

	if (nav.style.width == "6vw" || nav.style.width == "") {
		nav.style.width = "24vw";
		$("#navText").fadeIn(250);
	}
	else {
		nav.style.width = "6vw";
		$("#navText").fadeOut(250);

	}
}

