/* 
	Student Name: Deandre Brayboy
	File Name: scripts.js
	Date:
	*/
	
	// show and hide menu-links when the user clicks on the hamburger menu / bar icon */
	function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
		}
		else {
			menu.style.display = "block";
			
		}
	}