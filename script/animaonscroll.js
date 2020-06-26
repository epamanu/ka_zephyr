window.onload = function() {
    const SOL11 = document.querySelector("#sol11");
    const SOLBUTTON = document.querySelector("#solbutton");
    
  
    window.addEventListener('scroll', scrollEffect);
  
    function scrollEffect () {
      if(window.scrollY>=500) {
        SOL11.style.opacity = '1';
        SOL11.style.transform = 'translateY(0px)';
        SOL11.style.transition = '3s ease-in-out';
      }
      else {
        SOL11.style.opacity = '0';
        SOL11.style.transform = 'translateY(50px)';
        }
     }

    

     function scrollEffect () {
      if(window.scrollY>=500) {
        SOLBUTTON.style.opacity = '1';
        SOLBUTTON.style.transform = 'translateY(0px)';
        SOLBUTTON.style.transition = '3s ease-in-out';
      }
      else {

        SOLBUTTON.style.opacity = '0';
        SOLBUTTON.style.transform = 'translateY(-50px)';
        
      }
     }
  }


  