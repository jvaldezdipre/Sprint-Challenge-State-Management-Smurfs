import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';

const SmurfForm = () => {
  const { smurfValues, onInputChange, onSubmit } = useContext(SmurfContext);

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        placeholder='name'
        value={smurfValues.name}
        onChange={onInputChange}
      />
      <input
        type='text'
        name='height'
        placeholder='height'
        value={smurfValues.height}
        onChange={onInputChange}
      />
      <input
        type='text'
        name='age'
        placeholder='age'
        value={smurfValues.age}
        onChange={onInputChange}
      />
      <button>Add Smurf</button>
    </form>
  );
};

export default SmurfForm;
