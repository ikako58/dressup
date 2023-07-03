function myFunction() {
    document.getElementById("my-language-Dropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.lan-dropbtn')) {
      var dropdowns = document.getElementsByClassName("language-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  var modal = document.getElementById('id01');

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }