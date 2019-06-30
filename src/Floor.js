import React, { useState, useEffect } from 'react';
// import useCountRenders from './useCountRenders';
import floors from './floors';
import Unit from './Unit';

export default React.memo(({ name }) => {
  // useCountRenders();
  const [units, setUnits] = useState(null);

  useEffect(() => {
    const findUnits = floors.find(floor => floor.name === name);
    setUnits(findUnits ? findUnits.units : null);
  }, [name]);

  if (!units) {
    return null;
  }

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
