// Don't forget to import your functions
import { DriverStatus, age } from './Drivers';

describe("Drivers", () => {
  test("should return 'too young' when age is less than 16", () => {
    //write your assertions here
    expect(age(15)).toBe('too young')
  });
  test("should return 'too old' when age is greater than 85", () => {
    //write your assertions here
    expect(age(90)).toBe('too old')
  });
  test("should return 'eligible' when age is any ages between 16 and 85", () => {
    //write your assertions here
    expect(age(32)).toBe('eligible')
  });
});
