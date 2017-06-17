$(document).ready(function() {
  $('ul.nav-top__list').flexMenu({
    popupClass: "header-drop__list header-drop__list_col_4",
    cutoff: 0,
    linkText: ''
  });

  // $(".flexMenu-viewMore").addClass("nav-top__item");
  // $(".flexMenu-viewMore>a").addClass("nav-top__link").html("<button class='burger header-first__burger'> <div class='fa fa-bars'></div> </button>");

  $(".article-slider__items").slick({
    arrows: false,
    infinite: false
  })

  $(".article-slider__prs").slick({
    slidesToShow: 3,
    prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
    nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
    infinite: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }]
  })

  $(".article-slider__pr").click(function(){
    $(".article-slider__items").slick('slickGoTo', $(this).index());
  })

  $(".header-first__burger").click(function() {
    $(".header-drop__list").css({display: ''})
    $(".header-drop__list").toggleClass("header-drop__list_open")
  });

});

$(function(){
  $(".popup__button_file").click(function(){
      $(".popup__field_file").click();
  });

  $(".popup__field_file").change(function(){

         var filename = $(this).val().replace(/.*\\/, "");

         if( ! filename.length )
          return;
         $(".popup__filename").html("<span class='popup__filename-text'>"+filename+"</span> | <span class='popup__filename-remove'>Удалить</span>");

         $(".popup__filename-remove").click(function() {
           $(this).parent().html('');
           $(".popup__field_file").attr("type", "text")
           $(".popup__field_file").attr("type", "file")
           $(".popup__field_file").change()
         })
    });
})
