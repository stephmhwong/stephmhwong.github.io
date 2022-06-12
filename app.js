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
function openExp(evt, experience) {

	// declare variables
	var i, tabcontent, tablinks;

	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i ++) 
		tabcontent[i].style.display = "none";

	// remove active class
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i ++) 
		tablinks[i].className = tablinks[i].className.replace("active", "");

	// show current tab and add active class to the link opened in tab
	document.getElementById(experience).style.display = "block";
	evt.currentTarget.classNmae += "active";
}