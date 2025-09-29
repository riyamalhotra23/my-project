const groceries = [
  { id: 1, name: "Apples", quantity: 5 },
  { id: 2, name: "Bread", quantity: 2 },
  { id: 3, name: "Milk", quantity: 1 }
];

function renderGroceries() {
  const tbody = document.querySelector("#groceryTable tbody");
  tbody.innerHTML = "";
  groceries.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById("groceryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  if (name && quantity > 0) {
    const newId = groceries.length ? groceries[groceries.length - 1].id + 1 : 1;
    groceries.push({ id: newId, name, quantity });
    renderGroceries();
    this.reset();
  }
});

renderGroceries();