import random from 'lodash/random'
import sortBy from 'lodash/sortBy'

export function arvoPisteetRatsukoille(osallistujat, arvontakerrat){
  const ratsukot = pilkoRivit(osallistujat);
  return ratsukot.map((ratsukko) => {
    const pisteet = arvoPisteet(arvontakerrat);
    return {
      ratsukko: ratsukko,
      pisteet: pisteet
    }
  });
}

export function pilkoRivit(merkkijono){
  return merkkijono.split('\n');
}

export function arvoPisteet(arvontakerrat){
  return Array(arvontakerrat).fill(0).map(() => random(0, 10));
}

export function jarjestaTulokset(arvontatulokset){
  return sortBy(arvontatulokset, [
    (ratsukonTulos) => ratsukonTulos.pisteet.reduce((prev,curr) => prev + curr, 0)
  ]).reverse(); 
}
