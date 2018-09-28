module.exports = function getZerosCount(number) {
  let zeros=0, k=0;

  while(Math.pow(5,k) <= number) {
    k++;
  } 
 
  for(let i=1; i<=k; i++) {
    zeros += Math.floor(number/(Math.pow(5,i)));
  }

  return zeros;

}
