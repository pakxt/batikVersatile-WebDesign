const tabBtn = document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = "none";
    });
    tab[panelIndex].style.display = "block";
}
tabs(0);


// $(".tab").click(function(){
//     $(this).addClass("active").siblings().removeClass("active");
// })


// //js code to upload image adn show image on box

// //lets work for image showing functionality when we choose an image to upload 
// //when we choose a photo to upload
function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("img");
      preview.src = src;
      preview.style.display = "block";
    } 
}
