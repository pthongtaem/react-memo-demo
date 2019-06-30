import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Hello from './Hello';
import Square from './Square';
import Floor from './Floor';
import floors from './floors';
import { setShowRoom } from './reducers/matrix';

const Tower = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(setShowRoom('all'))}>all</button>
      <button onClick={() => dispatch(setShowRoom('01'))}>1</button>
      <button onClick={() => dispatch(setShowRoom('02'))}>2</button>
      <button onClick={() => dispatch(setShowRoom('03'))}>3</button>
      <hr />
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map(n => (
        <Square increment={increment} n={n} key={n} />
      ))}
    </div>
  );
};

export default Tower;
