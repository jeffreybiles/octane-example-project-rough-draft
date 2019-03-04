import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { computed } from '@ember/object';


export default class ApplicationController extends Controller {
  sortProperty = 'publicationYear'
  reversed = false

  @computed('books.[]', 'sortProperty', 'reversed')
  get sortedBooks(){
    let sortedBooks = this.books.sortBy(this.sortProperty)
    if(this.reversed) {
      return sortedBooks.reverse();
    } else {
      return sortedBooks;
    }
  }

  selectedBookIds = [1, 4]

  @computed('selectedBookId', 'books.@each.id')
  get selectedBook(){
    return this.books.findBy('id', this.selectedBookId)
  }

  hiddenBookIds = [2, 3]

  @computed('hiddenBookIds.[]', 'sortedBooks.@each.id')
  get shownBooks(){
    return this.sortedBooks.filter(book => {
      return !this.hiddenBookIds.includes(book.id)
    })
  }

  @computed('hiddenBookIds.[]', 'sortedBooks.@each.id')
  get hiddenBooks(){
    return this.sortedBooks.filter(book => {
      return this.hiddenBookIds.includes(book.id)
    })
  }

  books = [{
    id: 1,
    name: 'Brave New World',
    author: 'Aldous Huxley',
    publicationYear: 1932,
    pages: 248,
  }, {
    id: 2,
    name: 'The Way of Kings',
    author: 'Brandon Sanderson',
    publicationYear: 2010,
    pages: 1007,
  }, {
    id: 3,
    name: 'Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    publicationYear: 1973,
    pages: 2032,
  }, {
    id: 4,
    name: 'A Fire Upon the Deep',
    author: 'Vernor Vinge',
    publicationYear: 1992,
    pages: 391,
  }, {
    id: 5,
    name: 'Speaker for the Dead',
    author: 'Orson Scott Card',
    publicationYear: 1986,
    pages: 415
  }, {
    id: 6,
    name: 'My Hero Academia volume 1',
    author: 'Kohei Horikoshi',
    publicationYear: 2014,
    pages: 192
  }]

  @action
  selectBook(book){
    this.set('selectedBookId', book.id)
  }

  @action
  sortBooks(property, reversed){
    this.set('reversed', reversed);
    this.set('sortProperty', property);
  }

  @action
  hideBook(book){
    this.hiddenBookIds.pushObject(book.id)
  }

  @action
  showBook(book){
    this.hiddenBookIds.removeObject(book.id)
  }
}
