// Page loader
window.addEventListener('load', function() {
  const load_spinner_wrapper = document.querySelector('.load-spinner-wrapper');
  load_spinner_wrapper.classList.add('load-spinner-hidden');

  function removeSpinner() {
    document.body.removeChild(load_spinner_wrapper);
    load_spinner_wrapper.removeEventListener('transitionend', removeSpinner);
  }

  load_spinner_wrapper.addEventListener('transitionend', removeSpinner);
});

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

if(window.location.pathname === '/cars') {
  let searchCarBtn = document.querySelector('.mb-4.btn.btn-success.px-4.fw-semibold');
  if(searchCarBtn) {
    searchCarBtn.remove();
  }
} else {
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
      if (ver_scroll > why_us_title_offsetTop - 700) {
        why_us_title.classList.add('op-100');
      }
      
      grid_card_why_us.forEach(function(col, i) {
        if (ver_scroll > why_us_title_offsetTop - 500) {
          setTimeout(function() {
            grid_card_why_us[i].classList.add('op-100');
          }, 100 * (i + 1))
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
          }, 100 * (i + 1))
        }
      })
    }
  
    // Testimonial section
    const testimonial_title = document.getElementsByClassName('testimonial-title')[0];
    const testimonial_title_offsetTop = testimonial_title.offsetTop;
    const carousel_card = document.getElementsByClassName('carousel')[0];
    const carousel_card_offsetTop = carousel_card.offsetTop;
  
    if (1200 > window.innerWidth) {
      if (ver_scroll > testimonial_title_offsetTop - 900) {
        testimonial_title.classList.add('op-100');
      }
    
      if (ver_scroll > carousel_card_offsetTop - 700) {
        carousel_card.classList.add('op-100');
      }
    } else {
      if (ver_scroll > testimonial_title_offsetTop - 500) {
        testimonial_title.classList.add('op-100');
      }
    
      if (ver_scroll > carousel_card_offsetTop - 300) {
        carousel_card.classList.add('op-100');
      }
    }
  
    // Another section
    const another_section = document.getElementsByClassName('another-section')[0];
    const another_section_offsetTop = another_section.offsetTop;
  
   if (1200 > window.innerWidth) {
    if (ver_scroll > another_section_offsetTop - 900) {
      another_section.classList.add('op-100');
    }
   } else {
    if (ver_scroll > another_section_offsetTop - 450) {
      another_section.classList.add('op-100');
  }
  }
  
    // FAQ section
    const faq_left = document.getElementsByClassName('faq-left')[0];
    const faq_right = document.getElementsByClassName('faq-right')[0];
    const faq_section = document.getElementById('faq');
    const faq_section_offsetTop = faq_section.offsetTop;
  
    if (1200 > window.innerWidth) {
      if (ver_scroll > faq_section_offsetTop - 900) {
        faq_left.classList.add('op-100');
        faq_right.classList.add('op-100');
      }
    } else {
      if (ver_scroll > faq_section_offsetTop - 400) {
        faq_left.classList.add('op-100');
        faq_right.classList.add('op-100');
      }
    }
  
    // Footer section
    const footer_section = document.getElementsByTagName('footer')[0];
    const footer_section_offsetTop = footer_section.offsetTop;
  
    if (1200 > window.innerWidth) {
      if (ver_scroll > footer_section_offsetTop - 1000) {
        footer_section.classList.add('op-100');
      }
    } else {
      if (ver_scroll > footer_section_offsetTop - 650) {
        footer_section.classList.add('op-100');
      }
    }
  
  })
}
