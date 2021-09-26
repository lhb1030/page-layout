let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar-container");
let head = document.querySelector(".head-container");
let section = document.querySelector(".main-content");

btn.onclick = function(){
  sidebar.classList.toggle("small");
  head.classList.toggle("small");
  section.classList.toggle("small");
}

document.addEventListener("DOMContentLoaded", function(){
  
  window.addEventListener('resize', function(){
    let width = window.innerWidth;
    let manage = document.getElementById("manage-container");
    let top6 = document.getElementById("second-container");
    if(width < 800) {
      let sidebar = document.getElementById("sidebar-container");
      let head = document.getElementById("head-container");
      let section = document.getElementById("main-content");
      sidebar.classList.add("small");
      head.classList.add("small");
      section.classList.add("small");
    }else if(width < 1250) {
      manage.classList.add("small");
      top6.classList.add("small");
    }else {
      sidebar.classList.remove("small");
      head.classList.remove("small");
      section.classList.remove("small");
      manage.classList.remove("small");
      top6.classList.remove("small");
    }
  });

});