import random from 'lodash/random'

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
