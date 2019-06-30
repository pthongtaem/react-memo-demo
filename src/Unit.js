import React from 'react';

export default React.memo(({ unit }) => {
  return (
    <div style={{ padding: 5, backgroundColor: 'pink', marginRight: '5px' }}>
      {unit.number}
    </div>
  );
});
