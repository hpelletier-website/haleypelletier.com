var prevSelected = null;

function clearSelected() {
  if (prevSelected) {
    prevSelected.classList.remove("selected");
  }
}

function reset() {
  clearSelected();
  window.scrollTo(0, 0);
}

function selectPage(tab) {
  clearSelected();
  tab.classList.add("selected");
  prevSelected = tab;
  document.getElementById(tab.classList[0]).scrollIntoView();
  window.scrollBy(0, -175);
}

function highlight(element, clear = false) {
  var base_id = element.id.split("-")[0];
  var id_to_h = base_id + "-txt";
  var elm_to_h = document.getElementById(id_to_h);
  elm_to_h.style.color = clear ? "#343434" : "#f05d5e";
}
