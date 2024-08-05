import "./App.css";

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return (
    <div>
      <h1>Array Operations</h1>
      <p>Sum: {sum}</p>
      <p>Average: {average}</p>
      <p>Maximum: {max}</p>
      <p>Minimum: {min}</p>
    </div>
  );
};

const ObjectManipulation = () => {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York",
  };

  person.age = 29;
  return (
    <div>
      <h1>Person Details</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
};

const SquareArea = () => {
  const sideLength = 5;
  const area = sideLength * sideLength;
  return (
    <div>
      <h1>Area of Square</h1>
      <p>The area of square is: {area}</p>
    </div>
  );
};

const CapitalizeString = () => {
  const string = "hello world";
  return (
    <div>
      <h1>Capitalize Text</h1>
      <p>{string.toUpperCase()}</p>
    </div>
  );
};

const CircleArea = () => {
  const radius = 8;
  const area = Math.PI * radius * radius;
  return (
    <div>
      <h1>Area of Circle</h1>
      <p>The area of circle is: {area.toFixed(2)}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ArrayOperations />
      <ObjectManipulation />
      <SquareArea />
      <CapitalizeString />
      <CircleArea />
    </main>
  );
}
