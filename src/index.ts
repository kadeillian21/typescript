console.log("Hello Typescript");

let age: number = 20;
if (age < 50)
  age +=10;
console.log(age);

let sale: number = 123_456_789;  // In typescript, you can separate place values from each other using an underscore to make the number more readable.
let course: string = "TypeScript";
let is_published: boolean = true
let level;  // Not declaring a type assigns a type of 'any', but if you do that, why the heck are you using TypeScript???

function render(document: any) {
  console.log(document);
}


// This is a properly annotated perameter.  Be sure to anotate what your expected return is
let income: number = 10000
function calculateTax(income: number): number {
  if (income < 50_000)
    return income * 1.2;
  return income * 1.3;
}
//The above function would not compile correctly if we did not have the second return.  If we did not have the second return and we gave our condition a falsy value, then TS would return undefinded, whcih does not work because TS was expecting income to be a number, not undefined.