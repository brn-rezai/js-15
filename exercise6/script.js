// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons( arr ) {
  for ( let x of arr ) {
    const p = document.createElement( "p" );
    document.body.appendChild( p );
    p.innerText = `${ x.name },${ x.age }`;
  }
}

printPersons( persons );
