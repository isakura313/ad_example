let nav = document.querySelector("header nav");
let icon = document.querySelector("header  .icon");
icon.onclick = function(){
    nav.classList.toggle("helper");
}

$(document).ready(function(){
    $('.columns').magnificPopup({delegate: 'a',
    type: 'image',
    gallery :{
        enabled: true
    },
    removalDelay: 300,
  
    mainClass: 'mfp-fade'
  });


})
