import React from 'react';
import useCountRenders from './useCountRenders';
import Unit from './Unit';

export default React.memo(({ name, units }) => {
  useCountRenders();

  return (
    <div>
      <h1>Floor: {name}</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {units.map(unit => (
          <Unit unit={unit} key={unit.number} />
        ))}
      </div>
    </div>
  );
});
