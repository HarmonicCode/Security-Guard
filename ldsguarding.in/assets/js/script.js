$('.banner-section').slick({
    prevArrow: '',
    nextArrow: '',
    dots: true,
    autoplay: true,  
    autoplaySpeed: 1500,
    slidesToShow: 1,    
    slidesToScroll: 1
});


$('.banner-section-mob').slick({
  prevArrow: '',
  nextArrow: '',
  dots: true,
  autoplay: true,  
  autoplaySpeed: 1500,
  slidesToShow: 1,    
  slidesToScroll: 1
});




$('.swiper-wrapper').slick({
  prevArrow: '<button type="button" class="slick-prev" aria-label="Slick Previous"></button>',
  nextArrow: '<button type="button" class="slick-next" aria-label="Slick Next"></button>',
  dots: true,
  autoplay: false,  
  autoplaySpeed: 2000,
  slidesToShow: 1,    
  slidesToScroll: 1
});

$('.client-logo').slick({
  prevArrow: '<button type="button" class="slick-prev" aria-label="Slick Previous"></button>',
  nextArrow: '<button type="button" class="slick-next" aria-label="SLick Next"></button>',
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  ]
});
	




$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 25,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 1500,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 24,duration: 2000});
$('#number5').jQuerySimpleCounter({end: 7,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 250,duration: 2500});



// select all accordion items
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}


// gallery js

$(".filter a").click(function (e) {
    e.preventDefault();
    var a = $(this).attr("href");
    a = a.substr(1);
    $(".sets a").each(function () {
      if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
      else $(this).removeClass("hide");
    });



// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btncontainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";

}
});


let imgs = document.querySelectorAll(".gallery .all img");
  let count;
  imgs.forEach((img, index) => {
    img.addEventListener("click", function (e) {
      if (e.target == this) {
        count = index;
        let openDiv = document.createElement("div");
        let imgPreview = document.createElement("img");
        let butonsSection = document.createElement("div");
        butonsSection.classList.add("butonsSection");
        let closeBtn = document.createElement("button");
        let nextBtn = document.createElement("button");
        let prevButton = document.createElement("button");
        prevButton.innerText = "Previous";
        nextBtn.innerText = "Next";

        nextBtn.classList.add("nextButton");
        prevButton.classList.add("prevButton");
        nextBtn.addEventListener("click", function () {
          if (count >= imgs.length - 1) {
            count = 0;
          } else {
            count++;
          }

          imgPreview.src = imgs[count].src;
        });

        prevButton.addEventListener("click", function () {
          if (count === 0) {
            count = imgs.length - 1;
          } else {
            count--;
          }

          imgPreview.src = imgs[count].src;
        });

        closeBtn.classList.add("closeBtn");
        closeBtn.innerHTML = `<i class='fa-solid fa-xmark'></i>`;
        closeBtn.addEventListener("click", function () {
          openDiv.remove();
        });

        imgPreview.classList.add("imgPreview");
        imgPreview.src = this.src;

        butonsSection.append(prevButton, nextBtn);
        openDiv.append(imgPreview, butonsSection, closeBtn);

        openDiv.classList.add("openDiv");

        document.querySelector("body").append(openDiv);
      }
    });
  });


  // stop video playing on close function
  function stopVdoPlaying(){
    var iframe = document.getElementById('singleVideo');
    var src = iframe.src;
    iframe.src = '';
    iframe.src = src;
   }

   
  // sidebar contact form start
  $(document).ready(function(){
    $('.showSideForm').click(function(){
        $('.sidebar-contact').toggleClass('active')
        $('.toggle').toggleClass('active')
    })
    })
// sidebar contact form end

// contact us form logic 
$(document).ready(function() {
  $('#toggleBtn').click(function() {
    $('.contact-info-container').toggleClass('show'); // Toggle 'hide' class on contact-info-container
    $('.contact-form-container').toggleClass('hide'); // Toggle 'show' class on contact-form-container
    $(this).text() === 'More Info' ? $(this).text('Contact Form'):$(this).text("More Info");
  });
});

// show dropdown on click in phone view
$('.dropdown').click(function(){

  var icon = $(this).find('span.icon i');
  var dropdownMenu = $(this).find('.dropdown_menu--animated');
  dropdownMenu.toggleClass('show');
  if (dropdownMenu.hasClass('show')) {
    icon.removeClass('fa-plus').addClass('fa-minus');
  } else {
    icon.removeClass('fa-minus').addClass('fa-plus');
  }

   
})
document.querySelectorAll('.slider-btn').forEach(function(button) {
button.addEventListener('click', function() {
    if (!this.classList.contains('showSideForm')) {
     this.querySelector('a').click();
    }
});
});