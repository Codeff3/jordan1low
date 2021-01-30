var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2200;	// Time Between Switch
	 
// Image List
	images[0] = "images/jordan1.jpg";
	images[1] = "images/img_1.jpg";
	images[2] = "images/img_3.jpg";
	images[3] = "images/img_4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];
	document.slides.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;