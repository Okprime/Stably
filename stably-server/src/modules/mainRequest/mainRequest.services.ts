/**
 * check if the number passed is a prime number
 * return 
 * @returns Response
 */
const isNumberPrime = (value: number): any =>  {
  for (let i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }
  return value > 1;
}

export const getClosestPrimeNumber = (data: number) =>  {
  let lowerPrime;
  let counter = 1;
  while(!(lowerPrime )){
    if(!lowerPrime){
      if(isNumberPrime(data - counter)){
        lowerPrime = data - counter;
      }
    }
    counter++
  }
  return lowerPrime;
}


