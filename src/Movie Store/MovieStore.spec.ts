//dont forget to import your functions
import { inventory, addMovie, inStock, removeMovie, totalCost } from './MovieStore';

describe("Movie Store", () => {
  test("should varify that the inventory is an array", () => {
    expect(Array.isArray(inventory)).toBe(true)
  });
  test("addMovie() should add movie to inventory array", () => {
    expect(addMovie('The Matrix')).toStrictEqual(['The Matrix'])
  });
  test("inStock() should check if the input movie is in stock", () => {
    removeMovie('The Matrix')
    expect(inStock('The Matrix')).toBe(false)
  });
  test("totalCost() should return number of costs per rental per day", () => {
    expect(totalCost(5,2,3)).toEqual(30)
  });
});
