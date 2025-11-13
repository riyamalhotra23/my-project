const CircuitBreaker = require('opossum');

const options = {
  timeout: 3000, // If the function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, open the circuit
  resetTimeout: 30000 // After 30 seconds, try again
};

// Example service function to wrap with circuit breaker
const exampleServiceFunction = async () => {
  // Logic for the service call
};

// Create a circuit breaker instance
const breaker = new CircuitBreaker(exampleServiceFunction, options);

// Export the circuit breaker for use in the post service
module.exports = breaker;