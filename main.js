$(document).ready(function() {
    $('select').material_select();
});

var cube = document.getElementById('cubeId');
var option = document.getElementById("mySelect");
let lastProp;

const controls = Array.from(document.getElementsByTagName('options'));

function changeCss(){

  if(lastProp !== undefined && lastProp !== "background-color") {
         cube.style[lastProp] = "";
       }

  let index = option.value.indexOf(':');
  let val = option.value.slice([index + 1]);
  let property = option.value.slice(0,index);
  lastProp = property;
  console.log(property)
  cube.style[property] = val;
}
