import {pilkoRivit, arvoPisteet, arvoPisteetRatsukoille} from './arvoTulokset';

describe('pilkoRivit', () =>{
  test('pilkkoo merkkijonon listaksi', () =>{
    expect(pilkoRivit("Uli\nAli\nOli")).toEqual(["Uli","Ali","Oli"]);
  });
});

describe('arvoPisteet', () =>{
  test('arpoo arvontakertojen verran pisteitä', () =>{
    expect(arvoPisteet(7).length).toEqual(7);
  });

  test('arpoo pisteet 0-10 väliltä', ()=>{
    const tulokset = arvoPisteet(10000);
    expect(Math.max.apply(null, tulokset)).toEqual(10);
    expect(Math.min.apply(null, tulokset)).toEqual(0);
  });
});


describe('arvoPisteetRatsukoille', () =>{
  test('palauttaa oikeassa muodossa', () =>{
    const arvotutPisteet = arvoPisteetRatsukoille("Uli\nAli\nOli", 3)
    arvotutPisteet.map(ratsukonPisteet=>{
      expect(ratsukonPisteet).toEqual(
        expect.objectContaining(
        {
          ratsukko: expect.any(String),
          pisteet: expect.any(Array)
        }
      ))
    });
  });
});
