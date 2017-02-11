import React from 'react';
import ReactDOM from 'react-dom';
import Tulos from './Tulos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tulos />, div);
});

it('has br-tag if value of brTagi is true', () =>{
  expect(true).toBe(false);
})
