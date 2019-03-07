import Controller from '@ember/controller';
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
  hiddenBookIds = [1, 3]

  @computed('selectedBookIds.[]', 'sortedBooks.[]')
  get selectedBooks(){ return this.booksFromIds(this.selectedBookIds) }

  @computed('hiddenBookIds.[]', 'sortedBooks.[]')
  get shownBooks(){ return this.sortedBooks.filter(book => !this.hiddenBookIds.includes(book.id)) }

  @computed('hiddenBookIds.[]', 'sortedBooks.[]')
  get hiddenBooks(){ return this.booksFromIds(this.hiddenBookIds) }

  booksFromIds(idSet){
    return this.sortedBooks.filter(book => idSet.includes(book.id));
  }

  toggleSelection(book, isSelected){
    if(isSelected) {
      this.selectedBookIds.removeObject(book.id)
    } else {
      this.selectedBookIds.pushObject(book.id)
    }
  }
  sortBooks(property, reversed){
    this.set('reversed', reversed);
    this.set('sortProperty', property);
  }
  hideBook(book){ this.hiddenBookIds.pushObject(book.id) }
  hideAllSelected(){ this.hiddenBookIds.pushObjects(this.selectedBookIds); }
  showBook(book){ this.hiddenBookIds.removeObject(book.id) }
  showAllSelected(){ this.hiddenBookIds.removeObjects(this.selectedBookIds); }
  selectAll(){ this.set('selectedBookIds', this.sortedBooks.mapBy('id')); }
  unselectAll(){ this.set('selectedBookIds', []); }

  @computed('model.[]') get books() { return this.model }
}
