import React from 'react';
import useCountRenders from './useCountRenders';
import Unit from './Unit';

export default React.memo(({ floor }) => {
  useCountRenders();

  return (
    <div>
      <h1>Floor: {floor.name}</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {floor.units.map(unit => (
          <Unit unit={unit} key={unit.number} />
        ))}
      </div>
    </div>
  );
});
