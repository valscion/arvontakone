import React from 'react';
import ReactDOM from 'react-dom';
import RatsukonTulos from './RatsukonTulos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatsukonTulos />, div);
});

test('sisältää ratsukon ja sijoituksen', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatsukonTulos ratsukko="Ratsastaja - Hevonen" sijoitus={4} />, div);
  expect(div.textContent).toMatch('4. Ratsastaja - Hevonen');
});


describe('br-tagin lisäys', () => {
  test('lisää jos brTagi on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos brTagi={true} />, div);
    expect(div.textContent).toMatch(/.*<br \/>/);
  });

  test('ei lisää jos brTagi on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos brTagi={false} />, div);
    expect(div.textContent).not.toMatch(/.*<br \/>/);
  });
});

describe('strong-tagien lisäys', () => {
  test('lisää jos boldattu on true ja sijoittunut on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos boldattu={true} sijoittunut={true} />, div);
    expect(div.textContent).toMatch(/<strong>.*<\/strong>/);
  });

  test('ei lisää jos boldattu on false ja sijoittunut on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos boldattu={false} sijoittunut={false} />, div);
    expect(div.textContent).not.toMatch(/<strong>.*<\/strong>/);
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });

  test('ei lisää jos boldattu on true ja sijoittunut on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos boldattu={true} sijoittunut={false} />, div);
    expect(div.textContent).not.toMatch(/<strong>.*<\/strong>/);
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });

  test('ei lisää jos boldattu on false ja sijoittunut on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulos boldattu={false} sijoittunut={true} />, div);
    expect(div.textContent).not.toMatch(/<strong>.*<\/strong>/);
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });
});

