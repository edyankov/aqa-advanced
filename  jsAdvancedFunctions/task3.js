// Task 3: divide function with validation and try/catch/finally
function divide(numerator, denominator) {
    // Validation: both arguments must be numbers
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    // Validation: denominator cannot be zero
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return numerator / denominator;
}
// Call 1: valid values
try {
    const result = divide(10, 2);
    console.log('Result:', result);
} catch (error) {
    console.log('Error:', error.message);
} finally {
    console.log('Operation completed');
}
// Call 2: division by zero
try {
    const result = divide(10, 0);
    console.log('Result:', result);
} catch (error) {
    console.log('Error:', error.message);
} finally {
    console.log('Operation completed');
}
// Call 3: one of the arguments is not a number
try {
    const result = divide(10, 'abc');
    console.log('Result:', result);
} catch (error) {
    console.log('Error:', error.message);
} finally {
    console.log('Operation completed');
}
