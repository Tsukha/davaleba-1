// a და b-ს შედარება
const compfunc = function (a, b) {
  if (a === b) {
    return "tolia";
  } else {
    return "ar aris toli";
  }
};

console.log(compfunc(1, 1));
console.log(compfunc(1, 2));
console.log(compfunc("1", 1));

// ფარენჰეიტიდან ცელსიუსში
const fahrToCel = function (fahr) {
  if (typeof fahr == "number") {
    return ((fahr - 32) * 5) / 9;
  } else {
    return false;
  }
};

console.log(fahrToCel(1));
console.log(fahrToCel(32));
console.log(fahrToCel(212));
console.log(fahrToCel("212"));
console.log(fahrToCel("celsious"));

// operation ცვლადით
const numOperation = function (a, b, op) {
  if (typeof a !== "number" || typeof b !== "number") return false;

  if (op === "+") return a + b;
  else if (op === "-") return a - b;
  else if (op === "*") return a * b;
  else if (op === "/") return a / b;
  else return false;
};

console.log(numOperation(1, 2, "+"));
console.log(numOperation(6, 3, "-"));
console.log(numOperation(2, 3, "*"));
console.log(numOperation(6, 3, "/"));
console.log(numOperation(6, 3, "%"));
console.log(numOperation("6", 3, "+"));
console.log(numOperation(6, "3", "+"));
