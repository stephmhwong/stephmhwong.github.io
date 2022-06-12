// Navbar and Hamburger menu
const hamburger = document.querySelector('.container .navbar .list .hamburger');
const mobile_menu = document.querySelector('.container .navbar .list ul');
const menu_item = document.querySelectorAll('.container .navbar .list ul li a');
const header = document.querySelector('.container');

// open and close menu manually
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// the menu goes away after link is clickes
menu_item.forEach( link => {
	link.addEventListener('click', ()=> {
	  	hamburger.classList.remove('show');
		mobile_menu.classList ="initial";
	})
});

// change background color
document.addEventListener('scroll', () => {
	var scrollPosition = window.scrollY;
	if (scrollPosition > 250) {
		header.style.backgroundColor = '#67687d59';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// Work experiences tab 
function setupTabs () {
	document.querySelectorAll(".tabs-button").forEach (button => {
		button.addEventListener("click", () => {
			const sideBar = button.parentElement;
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			const tabToActivate = tabsContainer.querySelector(`.tabs-content[data-tab = "${tabNumber}"]`);

			
			sideBar.querySelectorAll(".tabs-button").forEach(button => {
				button.classList.remove("tabs-button-active");
			});

			tabsContainer.querySelectorAll(".tabs-content").forEach(tab => {
				tab.classList.remove("tabs-content-active");
			});

			button.classList.add("tabs-button-active");
			tabToActivate.classList.add("tabs-content-active");
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

	document.querySelectorAll(".tabs").forEach(tabsContainer => {
		tabsContainer.querySelector(".tabs-sidebar .tabs-button").click();
	})
});