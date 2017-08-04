var faker = require("faker");

console.log("WELCOME TO MY SHOP!");


// var randomProduct = faker.commerce.productName();

// var randomAdjective = faker.commerce.productAdjective();

// var randomMaterial = faker.commerce.productMaterial();

// var randomPrice = faker.commerce.price();


for (var i=0; i<10; i++){
    
console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}}  - $ {{commerce.price}}"));

}