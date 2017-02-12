import React from 'react';
import ReactDOM from 'react-dom';
import RatsukonTulos from './RatsukonTulos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatsukonTulos />, div);
});

test('sisältää ratsukon', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" />, div);
  expect(div.innerHTML).toMatch('Ratsastaja - Hevonen');
});

describe('br-tagin lisäys', () => {
  test('lisää jos brTagi on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" brTagi={true} />, div);
    expect(div.textContent).toMatch('Ratsastaja - Hevonen<br />');
  });

  test('ei lisää jos brTagi on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" brTagi={false} />, div);
    expect(div.textContent).not.toMatch('Ratsastaja - Hevonen<br />');
  });
});

describe('strong-tagien lisäys', () => {
  test('lisää jos boldattu on true ja sijoittunut on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" boldattu={true} sijoittunut={true} />, div);
    expect(div.textContent).toMatch('<strong>Ratsastaja - Hevonen</strong>');
  });

  test('ei lisää jos boldattu on false ja sijoittunut on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" boldattu={false} sijoittunut={false} />, div);
    expect(div.textContent).not.toMatch('<strong>Ratsastaja - Hevonen</strong>');
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });

  test('ei lisää jos boldattu on true ja sijoittunut on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" boldattu={true} sijoittunut={false} />, div);
    expect(div.textContent).not.toMatch('<strong>Ratsastaja - Hevonen</strong>');
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });

  test('ei lisää jos boldattu on false ja sijoittunut on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" boldattu={false} sijoittunut={true} />, div);
    expect(div.textContent).not.toMatch('<strong>Ratsastaja - Hevonen</strong>');
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });
});
