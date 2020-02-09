function drop(button) {
  close_all(); // so we don't have multiple open at once
  name = button.id.split("-")[0];
  dropdown_id = name + "-drop"
  document.getElementById(dropdown_id).classList.toggle("show");
}

function close(dropdown) {
 dropdown.classList.remove('show');
}

function close_all() {
  var dropdowns = document.getElementsByClassName("nav-drop-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];
    if (dropdown.classList.contains('show')) {
      close(dropdown);
    }
  }
}

// close if user clicks outside of dropdown
window.onclick = function(event) {
  if (!event.target.matches('.nav-btn') && !event.target.matches('.nav-drop-content')) {
    close_all();
  }
}
