"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestPrimeNumber = void 0;
/**
 * check if the number passed is a prime number
 * return
 * @returns Response
 */
const isNumberPrime = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
};
exports.getClosestPrimeNumber = (data) => {
    let lowerPrime;
    let counter = 1;
    while (!(lowerPrime)) {
        if (!lowerPrime) {
            if (isNumberPrime(data - counter)) {
                lowerPrime = data - counter;
            }
        }
        counter++;
    }
    return lowerPrime;
};
//# sourceMappingURL=mainRequest.services.js.map