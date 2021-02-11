/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Dolgozo from "./Dolgozo.js";
import Book from "./Book.js";

const brigi = new Backpack("Brigi", 35, "black", 10, 10, 3, false);

console.log("kedvenc taskam", brigi);

const szb = new Dolgozo("Brigcsi", 35, "no", "programozo", false);

console.log("A legjobb dolgozonk:", szb);

const book1 = new Book(
  "Indianok,",
  "Arany J.",
  "krimi",
  "Mora kiado",
  440,
  440
);
const book2 = new Book(
  "Lany a vonaton,",
  "Anny.",
  "krimi",
  "Mora kiado",
  456,
  234
);
const book3 = new Book(
  "Gyuruk ura,",
  "kja,egforu.",
  "krimi",
  "Mora kiado",
  222,
  222
);
const book4 = new Book(
  "Harry P,",
  "writter4.",
  "krimi",
  "Mora kiado",
  222,
  111
);
const book5 = new Book("The well,", "writter5.", "krimi", "Sci-fi", 555, 111);
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
