/// <reference path="typings/globals/jquery/index.d.ts" />

let imgArr = document.querySelectorAll(".img");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYamount = 0;

document.addEventListener("mousemove", function(e){
  mousePos(e);
})

function mousePos(e){
 
  moveXamount = e.pageX - prevX;
  moveYAmount = e.pageY - prevY;

  moveImg(moveXAmount, moveYAmount);

  prevX = e.pageX;
  prevY = e.pageY;
}

function moveImg(xAmount, yAmount){

  imgArr.forEach(function(img){
     let movementStrenght = 5 + (Math.random() * 15);

     img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
     img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";

  })

}