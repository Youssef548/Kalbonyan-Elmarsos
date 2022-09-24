import { useState, useEffect } from 'react';
import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  useCounter();
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
