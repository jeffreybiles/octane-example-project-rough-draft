import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { computed } from '@ember/object';


export default class BooksController extends Controller {
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

  @computed('selectedBookIds.[]', 'sortedBooks.[]')
  get selectedBooks(){ return this.booksFromIds(this.selectedBookIds) }

  @computed('hiddenBookIds.[]', 'sortedBooks.[]')
  get shownBooks(){ return this.sortedBooks.filter(book => !this.hiddenBookIds.includes(book.id)) }

  @computed('hiddenBookIds.[]', 'sortedBooks.[]')
  get hiddenBooks(){ return this.booksFromIds(this.hiddenBookIds) }

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

  @computed('model.[]')
  get books() { return this.model }
}
