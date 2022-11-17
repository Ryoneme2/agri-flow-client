import { useForm } from 'react-hook-form';
import React from 'react';

const person = {
  fname: 'Nick',
  lname: 'Jonas',
  age: 26,
};
for (let x in person) {
  console.log(x + ': ' + person[x]);
}
const App = () => {
  return (
    <>
      <h1>ok</h1>
    </>
  );
};

export default App;
