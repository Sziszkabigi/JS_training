/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const taska = {
  nev: "coach",
  zseb: 3,
  open: true,
  pant: {
    jobb: 5,
    bal: 5,
  },
};

console.log("A kedvenc taskam neve:", taska.nev);
console.log(taska.pant.jobb);
console.log(taska.open);
