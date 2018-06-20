const $header = $('header');

const $primaryButton = $('a.primary_button button');

const $secondaryButton = $('a.secondary_button button');

$header.on('mouseenter', () => {
  $header.addClass('hover');
})
.on('mouseleave', () => {
  $header.removeClass('hover');
});


$primaryButton.on('mouseenter', () => {
  $primaryButton.addClass('hover');
})
.on('mouseleave', () => {
  $primaryButton.removeClass('hover');
});

$secondaryButton.on('mouseenter', () => {
  $secondaryButton.addClass('hover');
})
.on('mouseleave', () => {
  $secondaryButton.removeClass('hover');
});







// ========================================================================================================
// ====================================== Scrollmagic stuff ===============================================
// ========================================================================================================


// Init ScrollMagic
var controller = new ScrollMagic.Controller();


// Header Squish Scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '#jumbotron h1',
  triggerHook: 0.4
})
.setClassToggle('header', 'scrolling') // add class to .fa-behance
// .addIndicators({
//   name: 'header squish',
//   colorTrigger: 'gold',
//   colorStart: 'gold'
// })
.addTo(controller);
