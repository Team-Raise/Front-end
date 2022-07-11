import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Desktop from './Desktop/Main';
import Mobile from './Mobile/Main'

const StateRendering = () => {
  const isPC = useMediaQuery({
    query: '(min-width: 980px)'
  })

  return (
    isPC ? <Desktop/> : <Mobile/>
  );
}

export default StateRendering;