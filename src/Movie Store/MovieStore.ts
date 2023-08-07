// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export let inventory = [];

export function addMovie(a: string) {
  inventory.push(a)
  return inventory
};

export function removeMovie(a: string) {
    let index = inventory.indexOf(a)
    if (index !== -1) {
        inventory.splice(index, 1)
    }
}

export function inStock(a: string) {
    if (inventory.includes(a)) {
        return true
    } else {return false}
}

export function totalCost(a: number, b: number, c: number) {
  return a * b * c
}