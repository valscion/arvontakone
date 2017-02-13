import laskeSijoittuneet from './laskeSijoittuneet';

describe('sijoittuneiden määrät', () =>{
  test('sijoittuneita 1-3', () =>{
    const o =Array.apply(null, Array(1)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(1);

    const o2 =Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(1);
  });

  test('sijoittuneita 4-8', () =>{
    const o =Array.apply(null, Array(4)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(2);

    const o2 =Array.apply(null, Array(8)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(2);
  });

  test('sijoittuneita 9-15', () =>{
    const o =Array.apply(null, Array(9)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(3);

    const o2 =Array.apply(null, Array(15)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(3);
  });

  test('sijoittuneita 16-24', () =>{
    const o =Array.apply(null, Array(16)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(4);

    const o2 =Array.apply(null, Array(24)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(4);
  });

  test('sijoittuneita 25-35', () =>{
    const o =Array.apply(null, Array(25)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(5);

    const o2 =Array.apply(null, Array(35)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(5);
  });

  test('sijoittuneita 36-48', () =>{
    const o =Array.apply(null, Array(36)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(6);

    const o2 =Array.apply(null, Array(48)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(6);
  });

  test('sijoittuneita 49-63', () =>{
    const o =Array.apply(null, Array(49)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(7);

    const o2 =Array.apply(null, Array(63)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(7);
  });

  test('sijoittuneita 64-80', () =>{
    const o =Array.apply(null, Array(64)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(8);

    const o2 =Array.apply(null, Array(80)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(8);
  });

  test('sijoittuneita 81-99', () =>{
    const o =Array.apply(null, Array(81)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(9);

    const o2 =Array.apply(null, Array(99)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(9);
  });

  test('sijoittuneita 100', () =>{
    const o =Array.apply(null, Array(100)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(10);
  });

  test('sijoittuneita yli 100', () =>{
    const o =Array.apply(null, Array(132)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o)).toEqual(13);

    const o2 =Array.apply(null, Array(229)).map(Number.prototype.valueOf,0);
    expect(laskeSijoittuneet(o2)).toEqual(22)
  });



});
