//Question 1
var prices = items.map(function (item){
return item.price;
})

var total = prices.reduce (function(x, y) {
return x +y;
})

var avg  = total / items.length
var avgprices = document.querySelector ("#answer1")
avgprices.innerHTML = avg
//Question 2
var prices = items.map(function (prices){
  return prices;
})
var filterPrice=items.filter(function(obj){
return obj.price >= 14 && obj.price <= 18;
})
var price = filterPrice.map(function(obj){
return obj.title;
})
var priceHTML = document.getElementById('answer2');
price.forEach(function (title) {
  priceHTML.innerHTML += "<p>" + title + "</p>";
});

//Quesiton 3
var prices10 = items.map(function (prices10){
return prices10;
})
var filterPrice = items.map(function (prices10){
return prices10.price;
})
var obj10HTML = document.getElementById('answer3');
obj10.forEach(function (title){
  obj10HTML.innerHTML;
})
