/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Book {
  constructor(name, writter, type, kiado, totalpage, currentpage) {
    this.name = name;
    this.writter = writter;
    this.type = type;
    this.kiado = kiado;
    this.totalpage;
    this.currentpage;
  }
  updateCurrentPage(newCurrentPage) {
    this.CurrentPage = newCurrentPage;
  }
}
export default Book;
