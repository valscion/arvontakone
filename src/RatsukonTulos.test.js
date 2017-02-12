import React from 'react';
import ReactDOM from 'react-dom';
import RatsukonTulos from './RatsukonTulos';

function RatsukonTulosOletuksilla(props) {
  return (
    <RatsukonTulos
      ratsukko="Oletus ratsukko"
      brTagi={false}
      boldattu={false}
      sijoittunut={false}
      sijoitus={1}
      pisteet={[]}
      {...props}
    />
  );
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatsukonTulosOletuksilla />, div);
});

test('sisältää ratsukon ja sijoituksen', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatsukonTulosOletuksilla ratsukko="Ratsastaja - Hevonen" sijoitus={4} />, div);
  expect(div.textContent).toMatch('4. Ratsastaja - Hevonen');
});


describe('br-tagin lisäys', () => {
  test('lisää jos brTagi on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla brTagi={true} />, div);
    expect(div.textContent).toMatch(/.*<br \/>/);
  });

  test('ei lisää jos brTagi on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla brTagi={false} />, div);
    expect(div.textContent).not.toMatch(/.*<br \/>/);
  });
});

describe('strong-tagien lisäys', () => {
  test('lisää jos boldattu on true ja sijoittunut on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla boldattu={true} sijoittunut={true} />, div);
    expect(div.textContent).toMatch(/<strong>.*<\/strong>/);
  });

  test('ei lisää jos boldattu on false ja sijoittunut on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla boldattu={false} sijoittunut={false} />, div);
    expect(div.textContent).not.toMatch(/<strong>.*<\/strong>/);
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });

  test('ei lisää jos boldattu on true ja sijoittunut on false', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla boldattu={true} sijoittunut={false} />, div);
    expect(div.textContent).not.toMatch(/<strong>.*<\/strong>/);
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });

  test('ei lisää jos boldattu on false ja sijoittunut on true', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla boldattu={false} sijoittunut={true} />, div);
    expect(div.textContent).not.toMatch(/<strong>.*<\/strong>/);
    expect(div.textContent).not.toMatch('<strong>');
    expect(div.textContent).not.toMatch('</strong>');
  });
});

describe('pisteet prosenteiksi', () => {
  test('antaa pisteiden perusteella prosentin', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[5,5,5]} />, div);
    expect(div.textContent).toMatch('(50.0%)');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[10,10,10]} />, div);
    expect(div.textContent).toMatch('(100.0%)');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[7, 6, 6]} />, div);
    expect(div.textContent).toMatch('(63.3%)');
  });

  test('jos pisteet on tyhjä lista, tulostaa "ei pisteitä"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[]} />, div);
    expect(div.textContent).toMatch('(ei pisteitä)');
  });
});
