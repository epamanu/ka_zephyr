// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("sol").style.fontSize = "50px";
    document.getElementById("sol").style.margin = "5px 0 0 0";
    document.getElementById("menuicon").style.fontSize = "35px";
    document.getElementById("menuicon").style.margin = "3px 3px 0 0";
    document.getElementById("menulogo").style.fontSize = "35px";
    document.getElementById("menulogo").style.margin = "3px 0 0 3px";
    
  } else {
    document.getElementById("sol").style.fontSize = "300px";
    document.getElementById("sol").style.margin = "100px 0 0 0";
    document.getElementById("menuicon").style.fontSize = "100px";
    document.getElementById("menuicon").style.margin = "8px 0 0 0";
    document.getElementById("menulogo").style.fontSize = "120px";
    document.getElementById("menulogo").style.margin = "8px 0 0 0";
    
  }
}



