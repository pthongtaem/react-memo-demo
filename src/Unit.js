import React from 'react';
import { useSelector } from 'react-redux';
// import useCountRenders from './useCountRenders';

export default React.memo(({ unit }) => {
  const showRoom = useSelector(state => {
    if (state.matrix.showRoom === 'all') {
      return 'pink';
    }

    if (unit.number.substring(0, 2) === state.matrix.showRoom) {
      return 'pink';
    }

    return 'gray';
  });

  // useCountRenders(unit.number);

  return (
    <div style={{ padding: 5, backgroundColor: showRoom, marginRight: '5px' }}>
      {unit.number}
    </div>
  );
});
