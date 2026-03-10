function displayResults() {
 const totalCosts = JSON.parse(sessionStorage.getItem('totalCosts'));
 const selectedStores = JSON.parse(sessionStorage.getItem('selectedStores'));
 const resultsDiv = document.getElementById('results');
 let bestStore = '';
 let minCost = Infinity;
 const storeImages = {
  "Maxima": "logotipi/maxima-logo.png",
  "Rimi": "logotipi/rimi-logo.png",
  "Mego": "logotipi/mego-logo.png",
  "Lidl": "logotipi/lidl-logo.webp",
  "Elvi": "logotipi/elvi-logo.png"
 };

 selectedStores.forEach(store => {
  const cost = totalCosts[store].toFixed(2);
  const resultItem = document.createElement('div');
  resultItem.classList.add('result-item');
  resultItem.innerHTML = `
  <img src="${storeImages[store]}" alt="${store}">
  <span>Tu samaksāsi ${cost} Eiro</span>
  `;
  resultsDiv.appendChild(resultItem);

  if (totalCosts[store] < minCost) {
   minCost = totalCosts[store];
   bestStore = store;
  }
 });
 
 document.getElementById('best-store').innerHTML = `
 <p>Izdevīgākais veikals ir:</p>
 <img src="${storeImages[bestStore]}" alt="${bestStore}" style="width: 250px; display: block; margin: auto;">
 `;
}

function goToPage1() {
 window.location.href = 'page1.html';
}

window.onload = displayResults;
