var index = 1;
showslide(index);

function changeslide(x){
  index += x;
  showslide(index);
}

function showslide (x){
  var slide = document.getElementsByClassName("slides");
  if (x > slide.length) {
    index = 1;
  }
  if (x < 1) {
    index = slide.length;
  }
  for (i=0; i < slide.length; i++){
    slide[i].style.display = "none";
  }
  slide[index-1].style.display = "block";
}