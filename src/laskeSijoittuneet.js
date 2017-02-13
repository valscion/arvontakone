export default function laskeSijoittuneet(osallistujat){
  const osallistujamaara = osallistujat.length;

  if (osallistujamaara >=1 && osallistujamaara <= 3) {
    return 1;
  } else if (osallistujamaara <= 8) {
    return 2;
  } else if (osallistujamaara <= 15) {
    return 3;
  } else if (osallistujamaara <= 24) {
    return 4;
  } else if (osallistujamaara <= 35) {
    return 5;
  } else if (osallistujamaara <= 48) {
    return 6;
  } else if (osallistujamaara <= 63) {
    return 7;
  } else if (osallistujamaara <= 80) {
    return 8;
  } else if (osallistujamaara <= 99) {
    return 9;
  } else if (osallistujamaara <= 100) {
    return 10;
  } else if (osallistujamaara > 100) {
    return parseInt((osallistujamaara/10), 10);
  }
}
