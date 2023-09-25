// Navbar scrolling section
const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow-sm');
  } else {
    navbar.classList.remove('bg-white', 'shadow-sm');
  }
});


// Parallax section
window.addEventListener('scroll', function() {
  // Jumbotron section
  const ver_scroll = window.scrollY;
  const figcaption_main_section = document.getElementsByClassName('figcaption-main-section')[0];
  const img_main_section = document.getElementsByClassName('img-main-section')[0];

  if (1200 > window.innerWidth ) {
    figcaption_main_section.style.transform = 'translateY(' + ver_scroll/2.8 + '%)';
    img_main_section.style.transform = 'translateY(' + ver_scroll/6 + '%)';
  } else {
    figcaption_main_section.style.transform = 'translateY(' + ver_scroll/3.6 + '%)';
    img_main_section.style.transform = 'translateY(' + ver_scroll/4.45 + '%)';
  }
  
  // Our services section
  const our_services = document.getElementById('our-services');
  const our_services_offsetTop = our_services.offsetTop;

  if (1200 > window.innerWidth ) {
    if (ver_scroll > our_services_offsetTop - 450) {
      our_services.classList.add('op-100');
    }
  } else {
    if (ver_scroll > our_services_offsetTop - 400) {
      our_services.classList.add('op-100');
    }
  }
  
  // Why us section
  const why_us_title = document.getElementsByClassName('why-us-title')[0];
  const why_us_title_offsetTop = why_us_title.offsetTop;
  const grid_card_why_us = document.querySelectorAll('#why-us .row .col');
  
  if (1200 > window.innerWidth ) {
    if (ver_scroll > why_us_title_offsetTop - 500) {
      why_us_title.classList.add('op-100');
    }
    
    grid_card_why_us.forEach(function(col, i) {
      if (ver_scroll > why_us_title_offsetTop - 350) {
        setTimeout(function() {
          grid_card_why_us[i].classList.add('op-100');
        }, 350 * (i + 1))
      }
    })
  } else {
    if (ver_scroll > why_us_title_offsetTop - 400) {
      why_us_title.classList.add('op-100');
    }
    
    grid_card_why_us.forEach(function(col, i) {
      if (ver_scroll > why_us_title_offsetTop - 300) {
        setTimeout(function() {
          grid_card_why_us[i].classList.add('op-100');
        }, 350 * (i + 1))
      }
    })
  }



})