// Navbar and Hamburger menu
const hamburger = document.querySelector('.container .top-display .nav-bar .hamburger');
const smallScreen = document.querySelector('.container .top-display .nav-bar ul');
const items = document.querySelectorAll('.container .top-display .nav-bar ul li a');
const header = document.querySelector('.container');

// open and close menu manually
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	smallScreen.classList.toggle('active');
});

// the menu goes away after link is clickes
items.forEach( link => {
	link.addEventListener('click', ()=> {
	  	hamburger.classList.remove('show');
		smallScreen.classList ="initial";
	})
});

// change background color
document.addEventListener('scroll', () => {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 250) {
		header.style.backgroundColor = '#4b515a59';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// Work experiences tab 
function setupTabs () {
	document.querySelectorAll(".tab-button").forEach (button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement;
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			const tabToActivate = tabsContainer.querySelector(`.tab-content[data-tab = "${tabNumber}"]`);

			
			sideBar.querySelectorAll(".tab-button").forEach(button => {
				button.classList.remove("tab-button--active");
			});

			tabsContainer.querySelectorAll(".tab-content").forEach(tab => {
				tab.classList.remove("tab-content--active");
			});

			button.classList.add("tab-button--active");
			tabToActivate.classList.add("tab-content--active");
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

	document.querySelectorAll(".tabs").forEach(tabsContainer => {
		tabsContainer.querySelector(".sidebar .tab-button").click();
	})
});