let img;


function preload(){
  img = loadImage('https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg')
}

function setup(){
  creatCanvas(640, 480);
  Image(img,0, 0);
}