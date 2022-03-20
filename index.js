var i = document.querySelectorAll(".drum ").length;

while(i--){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      playsound(this.innerHTML);
      buttonAnimation(this.innerHTML)
  })
}

document.addEventListener("keypress",function (event){
  playsound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key){
  var actBtn = document.querySelector("."+key);
  actBtn.classList.add("pressed");
  setTimeout(function () {
    actBtn.classList.remove("pressed")
  },100);
}
function playsound(keyPressed) {
  switch (keyPressed) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    default:console.log(keyPressed);
  }
}
