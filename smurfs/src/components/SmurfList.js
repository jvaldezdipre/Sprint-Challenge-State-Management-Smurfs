import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';
import SmurfCard from './SmurfCard';

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div>
      <h1>Render all smurf here</h1>
      {smurfs.map(smurf => {
        return <SmurfCard {...smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
