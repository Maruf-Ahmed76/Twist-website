// Preloader
$(window).on('load',function(){
	$('.loading-screen').fadeOut(1000);
})
$(document).ready(function(){
	// Navbar style chnage after scroll
	$(this).scroll(function(){
		// Store scroll position
		var window_scroll = $(this).scrollTop();
		// If scroll position equal or bigger then 100(optional) then change padding,nav background and text color else remove all of them
		if (window_scroll >= 100) {
			$(".navbar").addClass("pb-3");
			$(".navbar").addClass("nav-bg shadow");
			$(".nav-link,.navbar-brand,.search-icon i").addClass("text-dark");
		}else{
			$(".navbar").removeClass("pb-3");
			$(".navbar").removeClass("nav-bg shadow");
			$(".nav-link,.navbar-brand,.search-icon i").removeClass("text-dark");
		}
	});

	// Smooth scrollig effect
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		} // End if
	});
	// Click to hide nav
	$(".nav-link").click(function(){
    	$(".navbar-toggler").addClass("collapsed");
    	$(".navbar-collapse").removeClass("show");
    })
});