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
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022)
//The above function would not compile correctly if we did not have the second return.  If we did not have the second return and we gave our condition a falsy value, then TS would return undefinded, whcih does not work because TS was expecting income to be a number, not undefined.
// Adding a question mark after a variable in a function signifies that is is optional

// Undry Objects
let employee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
} = {id: 1, name: "Kade", retire: (date: Date) => {console.log(date)}};
// Read Only makes the property immutable

// Dry Objects
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}
// This 'type-alias' creates a new data type that you can annotate variables with to make new instances of the object

function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number')
    return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  } 
}

kgToLbs(10);
kgToLbs("10kg");


// Intersection
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};

// Literal (exact, specific) Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

