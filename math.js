const random = [1, 2, 3, 4, 5, 6, 7, 7];
  
function calculateFactorial(num) {
    if (num < 0) {
      return 'dont accept non zero nos.';
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  

        console.log('Facts of the no .in the array:');
  
  for (const num of random) {
    const start = performance.now();
    const factorial = calculateFactorial(num);
    const end = performance.now();
    const executionTime = end - start;
    console.log(`Fact ${num} is: ${factorial}. Exec time: ${executionTime}mss`);
  }
  

  // perform another solution using ON^2 Time Complexitity

  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
  
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }

  function sieveOfEratosthenes(max) {
    const primes = [];
    const isPrime = new Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
  
    for (let i = 2; i <= Math.sqrt(max); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    for (let i = 2; i <= max; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  const maxNumber = 2900;
  
  console.log('Calculating prime numbers up to', maxNumber);
  
  const start = performance.now();
  const primes = sieveOfEratosthenes(maxNumber);
  const end = performance.now(); 
  const executionTime = end - start;
  
  console.log('Prime numbers up to', maxNumber, ':', primes);
  console.log('Execution time:', executionTime, 'milliseconds');
  