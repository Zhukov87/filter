function arrayGenerator(arrayLength = 10000) {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    array.push(createObject());
  }

  return array;
}

function createObject() {
  const arrayNames = [
    "q12we3",
    "h41h43k",
    "8sdf89",
    "253v6kk",
    "9nc27c",
    "v89b24q",
    "8oebrea",
    "348boqva3",
    "87bvo3qbv",
    "np9v3qbv",
    "nvp9q4n",
    "v7boqbvr",
    "ncp39qbv",
    "3bo8qbarco",
    "vn7pq97be"
  ];

  const numberOfFields = Math.ceil(Math.random() * 10);
  const object = {};
  for (let i = 0; i < numberOfFields; i++) {
    const choiceName = Math.floor(Math.random() * 14);
    object[arrayNames[choiceName]] = generateRandomString();
  }

  return object;
}

function generateRandomString() {
  let str = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    str += possible.charAt(Math.floor(Math.random() * possible.length));

  return str;
}

const firstArray = arrayGenerator(10000);
const secondArray = arrayGenerator(1000);
const thirdArray = arrayGenerator(1000);

function filter(filterStr, ...args) {
  let filterField, arrays;
  if (typeof args[0] === "string") {
    [filterField, ...arrays] = args;
  } else {
    filterField = null;
    arrays = args;
  }
  return arrays
    .reduce((result, elem) => {
      return result.concat(elem);
    })
    .filter(elem => {
      if (filterField) {
        return elem[filterField] && elem[filterField].includes(filterStr);
      }
      return Object.values(elem).some(v => v.includes(filterStr));
    });
}

console.log(
  "filteredArrayWithFieldOfFiltration",
  filter("a1", "q12we3", firstArray, secondArray, thirdArray)
);
console.log(
  "filteredArrayWithoutFieldOfFiltration",
  filter("a1", firstArray, secondArray, thirdArray)
);
