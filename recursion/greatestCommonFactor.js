/* 
  Greatest Common Factor / Denominator

  Input: two integers
  Output: greatest common factor (the largest integer that can be evenly divided into both given ints)

  Greek mathematician Euclid demonstrated these facts:

  1) gcf(a,b) == a , if a == b;

  2) gcf(a,b) == gcf(a-b,b) , if a>b;

  3) gcf(a,b) == gcf(a,b-a) , if b>a.

  Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF ’s reach. You should be able to compute rGCF(123456,987654)
*/

function rGCF(a, b) {
  if (!b) {
    return a;
  }

  return rGCF(b, a % b);
}
