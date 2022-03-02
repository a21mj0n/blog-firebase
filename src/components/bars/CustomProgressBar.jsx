import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import useStorage from '../../hooks/useStorage';

const CustomProgressBar = ({ file }) => {
  const { progress } = useStorage(file);

  return (
    <ProgressBar now={progress} label={`${progress || 0}%`} />
  );
}


export default CustomProgressBar;