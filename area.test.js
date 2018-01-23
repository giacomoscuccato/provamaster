const getArea = require('./area.js');

var arrayTest = [2,3];
test('area right parameters', () => {
  expect(getArea(arrayTest)).toBe(6);
});

var arrayTest1 = [-1,-2];
test('area negative parameters', () => {
  expect(getArea(arrayTest1)).toBe(-1);
});