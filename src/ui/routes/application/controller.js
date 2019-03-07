import Controller from '@ember/controller';
import { action, computed } from '@ember-decorators/object';
import { mapBy } from '@ember-decorators/object/computed';


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
  hiddenBookIds = [2, 3]

  @mapBy('sortedBooks', 'id') sortedBookIds;
  // @setDiff('sortedBookIds', 'hiddenBookIds') shownBookIds

  // @computed('selectedBookIds.[]', 'sortedBooks.[]')
  // get selectedBooks(){ return this.booksFromIds(this.selectedBookIds) }
  //
  @computed('hiddenBookIds.[]', 'sortedBooks.[]')
  get shownBooks(){
    return this.sortedBooks.filter(book => {
      return !this.hiddenBookIds.includes(book.id)
    })
  }
  //
  // @computed('hiddenBookIds.[]', 'sortedBooks.[]')
  // get hiddenBooks(){ return this.booksFromIds(this.hiddenBookIds) }

  booksFromIds(idSet){
    return this.sortedBooks.filter(book => idSet.includes(book.id));
  }

  @action toggleSelection(book, isSelected){
    if(isSelected) {
      this.selectedBookIds.removeObject(book.id)
    } else {
      this.selectedBookIds.pushObject(book.id)
    }
  }
  @action sortBooks(property, reversed){
    this.set('reversed', reversed);
    this.set('sortProperty', property);
  }
  @action hideBook(book){ this.hiddenBookIds.pushObject(book.id) }
  @action hideAllSelected(){ this.hiddenBookIds.pushObjects(this.selectedBookIds); }
  @action showBook(book){ this.hiddenBookIds.removeObject(book.id) }
  @action showAllSelected(){ this.hiddenBookIds.removeObjects(this.selectedBookIds); }
  @action selectAll(){ this.set('selectedBookIds', this.sortedBooks.mapBy('id')); }
  @action unselectAll(){ this.set('selectedBookIds', []); }

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
}
