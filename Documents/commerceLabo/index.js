window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(document).scroll(function(){
      if ($(this).scrollTop() > 810) { 
        $('.recommendation-left').addClass('fixed'); 
      } else if ($(this).scrollTop() < 810) {
        $('.recommendation-left').removeClass('fixed'); 
      } 
    }); 
    $(document).scroll(function(){
      if ($(this).scrollTop() > 2760) {
        $('.recommendation-left').removeClass('fixed'); 
        $('.recommendation-left').addClass('fixed-2');
      } else if ($(this).scrollTop() < 2760) {
        $('.recommendation-left').removeClass('fixed-2');
      }
    });
  }); 

  $(function(){
    $(document).scroll(function(){
      if ($(this).scrollTop() > 810) { 
        $('.recommendation-left-1400').addClass('fixed'); 
      } else if ($(this).scrollTop() < 810) {
        $('.recommendation-left-1400').removeClass('fixed'); 
      } 
    }); 
    $(document).scroll(function(){
      if ($(this).scrollTop() > 2660) {
        $('.recommendation-left-1400').removeClass('fixed'); 
      }
    });
  }); 

  $(function(){
    $(document).scroll(function(){
      if ($(this).scrollTop() > 810) { 
        $('.recommendation-left-1200').addClass('fixed'); 
      } else if ($(this).scrollTop() < 810) {
        $('.recommendation-left-1200').removeClass('fixed'); 
      } 
    }); 
    $(document).scroll(function(){
      if ($(this).scrollTop() > 2560) {
        $('.recommendation-left-1200').removeClass('fixed'); 
      }
    });
  }); 
});
