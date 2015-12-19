'use babel';

export default function doSomething(withName) {
  let name = `
    This is the name of ${withName}. They are
    good people.
  `;

  console.log(name);
  return name;
}

export function doSomethingElse(withName) {
  let result = {
    name: withName,
    age: 21,
    canDrink: true
  };

  console.log(result);
  return result;
}