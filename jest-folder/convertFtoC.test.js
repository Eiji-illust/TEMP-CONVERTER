// const  { default: TestRunner } = require("jest-runner");
const { convertFtoC } = require('./converter');

test('Converts Fahrenheit to Celsius correctly', () => {
    expect(convertFtoC(50)).toBe(10);
    expect(convertFtoC(32)).toBe(0);
});

