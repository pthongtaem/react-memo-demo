import React from 'react';
import { useDispatch } from 'react-redux';
import { notification } from 'antd';
import Floor from './Floor';
import floors from './floors';
import { setShowRoom } from './reducers/matrix';

const Tower = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '10px' }}>
      {floors.map(floor => (
        <Floor key={floor.name} floor={floor} />
      ))}
      <hr />
      <button onClick={() => dispatch(setShowRoom('all'))}>all</button>
      <button onClick={() => dispatch(setShowRoom('01'))}>1</button>
      <button onClick={() => dispatch(setShowRoom('02'))}>2</button>
      <button onClick={() => dispatch(setShowRoom('03'))}>3</button>
      <hr />
      <button
        onClick={() => {
          notification.open({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
        }}
      >
        alert
      </button>
    </div>
  );
};

export default Tower;
