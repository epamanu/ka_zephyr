const navlogo = document.querySelector("#logosvg");

const sectionOne = document.querySelector(".herostick");


const sectionOneOptions = {
  rootMargin: "-10px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navlogo.classList.remove("logo");
      
    } else {
      navlogo.classList.add("logo");
      
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

