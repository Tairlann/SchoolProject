let burger = document.getElementById("burger");
let logo = document.getElementById("logo");
let navig = document.getElementById("nav");
let burgerIcon = document.getElementById("icon");
let link = document.getElementById("link");

// drop down the menu, and swap the icon to the close icon
function navbar() {
  //   $(this).toggleClass('icon-menu');
  //   $(this).toggleClass('icon-cross');
  console.log("am");
  navig.classList.toggle("down");

  if (navig.className == "down") {
    burgerIcon.innerHTML = "close";
  } else {
    burgerIcon.innerHTML = "drag_handle";
  }

  //   $(".icon-search").removeClass("icon-cross");
}
link.addEventListener("click", function () {
  if (navig.className == "down") {
    navig.classList.toggle("down");
    burgerIcon.innerHTML = "drag_handle";
  }

  console.log("kotal");
});
