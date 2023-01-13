// $(function(){
//   var topOfOthDiv = $(".hideshare").offset().top;
//   $(window).scroll(function() {
//       if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
//           $(".share").hide(); //reached the desired point -- show div
//       }
//       else{
//         $(".share").show();
//       }
//   });
// });


// time
$("span[created_at]").each(function () {
    const el = $(this);
    const date = new Date(parseFloat(el.attr('created_at')) * 1000);
    el.text(`${date.toDateString()}, ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`);
})