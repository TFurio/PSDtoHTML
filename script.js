$(document).ready(function() {
    // Initialize the carousel with a reasonable interval
    $('#blogCarousel').carousel({
        interval: 5000 // Set to a more common interval (e.g., 5 seconds)
    });

    // Handle carousel pause/play on hover
    $('#blogCarousel').hover(
        function() {
            $(this).carousel('pause');
        },
        function() {
            $(this).carousel('cycle');
        }
    );

    // Add smooth scrolling for anchor links
    $(document).on('click', 'a[href^="#"]', function(event) {
        if (!$(event.target).closest('#blogCarousel').length) {
            event.preventDefault();

            var target = $($(this).attr('href'));

            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000, 'easeInOutExpo'); // Added easing for smoother scrolling
            }
        }
    });
});
