import React, { useState, useCallback } from 'react';
import Hello from './Hello';
import Square from './Square';
import Floor from './Floor';
import floors from './floors';

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];
  const [floorShow, setFloorShow] = useState('all');

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount],
  );

  return (
    <div>
      {floors.map(floor => (
        <Floor key={floor.name} name={floor.name} unit={floor.units} />
      ))}
      <hr />
      <button onClick={() => setFloorShow('all')}>all</button>
      <button onClick={() => setFloorShow('2')}>2</button>
      <hr />
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map(n => (
        <Square increment={increment} n={n} key={n} />
      ))}
    </div>
  );
};

export default App;
