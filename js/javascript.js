$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// var element = document.getElementById("slide2");
//
// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({block: "end"});
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

 // $(document).on('click', 'a[href^="#"]', function (event) {
 //     event.preventDefault();
 //
 //     $('html, body').animate({
 //         scrollTop: $($.attr(this, 'href')).offset().top
 //     }, 500);
 // });

/*    $(document).ready(function() {
        $('a[href*=#]').each(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname
          && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
             if ($target) {
               var targetOffset = $target.offset().top;

               $(this).click(function() {
                $("#nav li a").removeClass("active");
                $(this).addClass('active');
                          $('html, body').animate({scrollTop: targetOffset}, 1000);
                          return false;
                        });
                     }
                   }
                 });

               });
*/
// Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
