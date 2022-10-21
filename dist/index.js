"use strict";
console.log("Hello Typescript");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sale = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = { id: 1, name: "Kade", retire: (date) => { console.log(date); } };
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map