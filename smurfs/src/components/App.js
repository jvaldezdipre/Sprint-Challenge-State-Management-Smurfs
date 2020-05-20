import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts';
import SmurfList from './SmurfList';
import './App.css';
import SmurfForm from './SmurfForm';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [smurfValues, setSmurfValues] = useState({
    id: Date.now(),
    name: '',
    height: '',
    age: '',
  });

  const getSmurf = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        setSmurfs(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getSmurf();
  }, []);

  const onInputChange = evt => {
    setSmurfValues({
      ...smurfValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = evt => {
    axios
      .post('http://localhost:3333/smurfs', smurfValues)
      .then(res => {
        console.log('added smurf to list', res);
        getSmurf();
      })
      .catch(err => console.log(err));
  };

  // const deleteSmurf = id => {
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${id}`)
  //     .then(res => {
  //       console.log('Deleted item', res);
  //       // getSmurf();
  //     })
  //     .catch(err => console.log('Deleted item Error', err));
  // };

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfContext.Provider
        value={{ smurfs, smurfValues, onInputChange, onSubmit }}
      >
        <SmurfForm />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
