const prices = {
 "Maize": { "Maxima": 0.8, "Rimi": 0.9, "Mego": 0.85, "Lidl": 0.75, "Elvi": 0.82 },
 "Piens": { "Maxima": 1.2, "Rimi": 1.25, "Mego": 1.15, "Lidl": 1.1, "Elvi": 1.22 },
 "Gurķi": { "Maxima": 1.5, "Rimi": 1.55, "Mego": 1.6, "Lidl": 1.4, "Elvi": 1.45 },
 "Gaļa": { "Maxima": 3.5, "Rimi": 3.7, "Mego": 3.6, "Lidl": 3.3, "Elvi": 3.4 },
 "Citrons": { "Maxima": 0.9, "Rimi": 1.0, "Mego": 0.95, "Lidl": 0.85, "Elvi": 0.88 },
 "Makoroni": { "Maxima": 0.6, "Rimi": 0.65, "Mego": 0.63, "Lidl": 0.58, "Elvi": 0.6 }
};

function addRow() {
 const container = document.getElementById("productContainer");
 const newRow = document.createElement("div");
 newRow.classList.add("product-row");
 
 newRow.innerHTML = `
 <select class="product-select">
 <option value="">Produkts</option>
 <option value="Maize">Maize</option>
 <option value="Piens">Piens</option>
 <option value="Gurķi">Gurķi</option>
 <option value="Gaļa">Gaļa</option>
 <option value="Citrons">Citrons</option>
 <option value="Makoroni">Makoroni</option>
 </select>
 <input type="number" min="1" class="quantity-input" placeholder="...">
 <button class="delete-button" onclick="deleteRow(this)">X</button>
 `;
 container.appendChild(newRow);
}

function deleteRow(button) {
 const row = button.parentNode;
 row.parentNode.removeChild(row);
}

function goToPage3() {
 const selectedStores = JSON.parse(sessionStorage.getItem('selectedStores'));
 let totalCosts = {};
 
 selectedStores.forEach(store => {
  totalCosts[store] = 0;
 });
 
 const productItems = document.querySelectorAll('.product-row');
 
 productItems.forEach(item => {
  let product = item.querySelector('.product-select').value;
  const quantity = parseInt(item.querySelector('.quantity-input').value) || 0;
 
  if (product && prices[product]) {
   selectedStores.forEach(store => {
    totalCosts[store] += (prices[product][store] * quantity);
   });
  }
 });
 
 sessionStorage.setItem('totalCosts', JSON.stringify(totalCosts));
 window.location.href = 'page3.html';
}
