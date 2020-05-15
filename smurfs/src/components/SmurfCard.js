import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';

const SmurfCard = props => {
  const { deleteSmurf } = useContext(SmurfContext);
  return (
    <div>
      <h3>{props.name} </h3>
      <p> {props.height} </p>
      <p> {props.age} </p>
      <button onClick={deleteSmurf(props.id)}>Delete Smurf</button>
    </div>
  );
};

export default SmurfCard;
