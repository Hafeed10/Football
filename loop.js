function addClass() {
    document.body.classList.add("sent");
  }
  sendLetter.addEventListener("click", addClass);



  const navToggle = document.querySelector(".navbar_toggle");
  const links = document.querySelector(".main_nav");

 navToggle.addEventListener('click', function(){
 links.classList.toggle("show_nav");
})