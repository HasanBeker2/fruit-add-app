import "./App.css";
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";



function App() {

  const [fruits, setFruits] = React.useState([
    { fruitName: 'banana', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);

  // const fruitsArray = [
  //   { fruitName: "orange", id: 4 },
  //   { fruitName: "grapes", id: 5 },
  //   { fruitName: "strawberry", id: 6 },
  //   { fruitName: "mango", id: 7 },
  //   { fruitName: "pineapple", id: 8 },
  //   { fruitName: "pear", id: 9 },
  //   { fruitName: "kiwi", id: 10 },
  //   { fruitName: "watermelon", id: 11 },
  //   { fruitName: "peach", id: 12 },
  //   { fruitName: "lemon", id: 13 }
  // ];
  //const fruitsArray = ["orange", "grapes", "strawberry", "mango", "pineapple", "pear", "kiwi", "watermelon", "peach", "lemon"].map((fruit, idx) => ({fruitName: fruit, id: idx+4}));
  const fruitsArray = ["orange", "grapes", "strawberry", "mango", "pineapple", "pear", "kiwi", "watermelon", "peach", "lemon"];


  // function addFruit() {
  //   // setFruits([{ fruitName: "orange", id: 4 }, ...fruits]);
  //   //const randomIndex = Math.floor(Math.random() * fruitsArray.length);
  //  // const newFruit = fruitsArray[randomIndex];
  //  // setFruits([newFruit, ...fruits]);

  //  if (fruitsArray.length === 0) {
  //   alert("there is no more fruit in the basket");
  // } else {
  //   const randomIndex = Math.floor(Math.random() * fruitsArray.length);
  //   //const newFruit = { fruitName: fruitsArray[randomIndex], id: randomIndex+4};
  //   const newFruit = fruitsArray[randomIndex];
  //   fruitsArray.splice(randomIndex, 1);
  //   setFruits([newFruit, ...fruits]);

  // }
  // }
  function addFruit() {
    if (fruitsArray.length === 0) {
      alert("there is no more fruit in the basket");
    } else {
      const randomIndex = Math.floor(Math.random() * fruitsArray.length);
      //const newFruit = { fruitName: fruitsArray[randomIndex], id: randomIndex + 4 };
      const newFruit = { fruitName: fruitsArray[randomIndex], id: Date.now() + fruitsArray.length + randomIndex };
      //fruitsArray.splice(randomIndex, 1);
      setFruits([...fruits, newFruit]);

    }
  }

  return (

    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruitsCount={fruits} />
      <button className="add-orange-fruit-button" onClick={addFruit}>Add a Random Fruit</button>

    </div>

  );
};

export default App;
