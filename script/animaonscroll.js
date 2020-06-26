window.onload = function() {
    const EFFECT1 = document.querySelector("#sol");
  
    window.addEventListener('scroll', scrollEffect);
  
    function scrollEffect () {
      if(window.scrollY>=500) {
        EFFECT1.style.opacity = '1';
        EFFECT1.style.transform = 'translateY(0px)';
        EFFECT1.style.transition = '1s ease-in-out';
      }
      else {
        EFFECT1.style.opacity = '0';
        EFFECT1.style.transform = 'translateY(-50px)';
      }
     }
  }