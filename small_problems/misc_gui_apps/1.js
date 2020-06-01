// vanilla js
// document.addEventListener('DOMContentLoaded', function() {
//   let figures = document.getElementsByTagName('figure');

//   Array.prototype.slice.call(figures).forEach(figure => {
//     figure.addEventListener('mouseover', function(e) {
//       let mouseover = true;
//       let caption = e.currentTarget.children[1];

//       setTimeout(function() {
//         if (mouseover) {
//           caption.style.display = 'block';
//         }
//       }, 2000);

//       e.currentTarget.addEventListener('mouseout', function(e) {
//         mouseover = false;
//         caption.style.display = 'none';
//       });
//     });
//   });
// });

// jquery
// $(function() {
//   $('#exotic_animals').on('mouseover', 'img', function(e) {
//     let mouseover = true;
//     let $img = $(this);
//     let $caption = $($img.next());

//     setTimeout(function() {
//       if (mouseover) {
//         $caption.fadeIn('slow');
//       }
//     }, 2000);
    
//     $img.on('mouseout', function(e) {
//       mouseover = false;
//       $caption.hide();
//     });
//   });
// });

// jquery refactored
$(function() {
  $('#exotic_animals').on('mouseover', 'img', function(e) {
    let $img = $(this);
    $img.next().delay(2000).fadeIn('slow');
    
    $img.on('mouseout', function(e) {
      $img.next().stop(true).hide();
    });
  });
});