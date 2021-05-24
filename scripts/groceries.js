// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yogurt\t$1.99",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 1.99
	},
	{
		name: "almond granola - $2.35",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: true,
		price: 2.35
	},
	{
		name: "salmon - $10.00",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 10.00
	},
    {
		name: "milk - $4.00",
		lactoseIntolerant: false,
		nutAllergy: true,
        organic: false,
		price: 4.00
	},
    {
		name: "kale - $6.50",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 6.50
	},
    {
		name: "chips - $2.50",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 2.50
	},
    {
		name: "walnuts - $1.25",
		lactoseIntolerant: true,
		nutAllergy: false,
        organic: true,
		price: 1.25
	},
    {
		name: "rice - $6.25",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 6.25
	},
    {
		name: "grapes - $3.75",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: true,
		price: 3.75
	},
    {
		name: "beef - $12.00",
		lactoseIntolerant: true,
		nutAllergy: true,
        organic: false,
		price: 12.00
	}
];


	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	lactoseChecked = document.getElementById('LactoseIntolerant').checked;
	nutChecked = document.getElementById('NutAllergy').checked;
	organicChecked = document.getElementById('Organic').checked;

	for (let i=0; i<prods.length; i+=1) {
		let itemAdd = true;
		
		if ((prods[i].lactoseIntolerant == false) && (lactoseChecked)) {
			itemAdd = false;
		}
		if ((prods[i].nutAllergy == false) && (nutChecked)) {
			itemAdd = false;
		}
		if ((prods[i].organic == false) && (organicChecked)) {
			itemAdd = false;
		}

		if (itemAdd) {
			product_names.push({name: prods[i].name, price: prods[i].price});
		}
	}
	product_names.sort(
		function(a,b){
			return a.price - b.price;
		}
	);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}