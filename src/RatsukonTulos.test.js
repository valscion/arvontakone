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
      naytaProsentti={true}
      naytaPisteet={false}
      naytaHylatyt={true}
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

describe('pisteet, prosentit ja tekstit', () => {
  test('antaa pisteiden perusteella prosentin', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[5,5,5]} />, div);
    expect(div.textContent).toMatch('(50.000%)');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[10,10,10]} />, div);
    expect(div.textContent).toMatch('(100.000%)');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[7, 6, 6]} />, div);
    expect(div.textContent).toMatch('(63.333%)');
  });

  test('ei näytä prosentteja, jos naytaProsentti on false', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[5,5,5]} naytaProsentti={false} />, div);
    expect(div.textContent).not.toMatch('%');
  });

  test('näyttää pisteet jos naytaPisteet on true', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[5,5,5]} naytaPisteet={true} />, div);
    expect(div.textContent).toMatch('5-5-5');
  });

  test('ei näytä pisteitä jos naytaPisteet on false', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[5,5,5]} />, div);
    expect(div.textContent).not.toMatch('5-5-5');
  });

  test('näyttää tekstin hylätty jos naytaHylatyt on true', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<RatsukonTulosOletuksilla pisteet={[3,3,3]} naytaPisteet={true} />, div);
    expect(div.textContent).toMatch('hylätty');
  });


});
