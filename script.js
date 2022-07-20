function navDropFunc(){
    document.getElementById("myNavDrop").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropDown')) {
      var dropdowns = document.getElementsByClassName("navDrop-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.getElementById("showLogin").addEventListener("click",function(){
    // console.log("loged in");
    document.querySelector(".popUp").classList.add("popUpActive");
  });

  document.querySelector(".closeButton").addEventListener("click",function(){
    document.querySelector(".popUp").classList.remove("popUpActive");
  });

  document.getElementById("navWhatsapp").addEventListener("click",function(){
    window.location.href="https://api.whatsapp.com/send?phone=919930088522";
  })

  