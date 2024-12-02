

const d = document,
     parent = d.querySelector(".sidebar");

parent.addEventListener("click", e=>{
    let targ = e.target,
      drp = document.querySelectorAll(".dropdown-content");
  
      for (let i = 0; i < drp.length; i++) {
    if (drp[i].previousElementSibling === targ) {
      drp[i].classList.toggle("show");
      drp[i].previousElementSibling.classList.toggle("active");
    } else {
      drp[i].classList.remove("show");
      drp[i].previousElementSibling.classList.remove("active");
    }
  }
})

d.addEventListener("click", e=>{
     if (!e.target.matches('.dropbtn')) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

})







