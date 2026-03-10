function toggleSelection(element) {
 element.classList.toggle("selected");
 updateNextButton();
}

function updateNextButton() {
 const selectedOptions = document.querySelectorAll(".veikals.selected");
 const nextButton = document.getElementById("nextButton");
 if (selectedOptions.length > 0) {
  nextButton.classList.add("active");
 } else {
  nextButton.classList.remove("active");
 }
}

function saveSelectedStores() {
 const selectedStores = Array.from(document.querySelectorAll(".veikals.selected"))
  .map(el => el.querySelector("img").alt);
 
 sessionStorage.setItem('selectedStores', JSON.stringify(selectedStores));
}

function goToPage2() {
 saveSelectedStores();
 window.location.href = 'page2.html';
}
