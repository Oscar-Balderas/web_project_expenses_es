//Variables iniciales
let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

//Array de gastos
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

//Calculo total de gastos
totalExpensesValue = 0;
for (let n = 0; n < expenseEntries.length; n++) {
  totalExpensesValue += expenseEntries[n][1];
}

//calculo del gasto total medio
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  let prom = totalExpensesValue / expenseEntries.length;
  return prom;
}

//Calculo del saldo
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

//Colores de saldo
function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

//Calculo de estadisticas por categoria
function calculateCategoryExpenses(categoria) {
  let total = 0;
  for (let n = 0; n < expenseEntries.length; n++) {
    let nombreDeCategoria = expenseEntries[n][0];
    let cantidad = expenseEntries[n][1];

    if (nombreDeCategoria === categoria) {
      total += cantidad;
    }
  }
  return total;
}

//Calculo de la categoria mas grande de gastos
function calculateLargestCategory() {
  let categoriasDeGastos = [
    "groceries",
    "restaurantes",
    "transport",
    "home",
    "subscriptions",
  ];
  let categoriesData = [];

  //Agregaremos datos al array
  for (let n = 0; n < categoriasDeGastos.length; n++) {
    let name = categoriasDeGastos[n];
    let total = calculateCategoryExpenses(name);
    categoriesData.push([name, total]);
  }

  //Analizamos los datos y encontraremos el valor mas alto
  let categoryMostExpensive = "";
  let higherExpensive = 0;

  for (let n = 0; n < categoriesData.length; n++) {
    let nombreCategoria = categoriesData[n][0];
    let categoriaTotal = categoriesData[n][1];

    if (categoriaTotal > higherExpensive) {
      higherExpensive = categoriaTotal;
      categoryMostExpensive = nombreCategoria;
    }
  }
  return categoryMostExpensive;
}

//Gastos agregados al presupuesto
function addExpenseEntry(valores) {
  expenseEntries.push(valores);
  totalExpressValue += valores[1];
}
