$(document).ready(function(){
  $(".slick01").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 603,
        settings: {
          dots: false,
        }
      },
    ]
  });
  });
    
    
    
  /*
  下記参照ページ↓
  
  https://nyanguitar.com/jquery-plugin-slick/#slick-2

  https://webdesignday.jp/inspiration/technique/jquery-js/3847/
  */