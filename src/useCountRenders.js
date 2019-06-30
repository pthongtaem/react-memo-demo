import { useRef } from 'react';

export default text => {
  const renders = useRef(0);
  console.log(`renders: ${text || ''} ${renders.current++}`);
};
