import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { computed } from '@ember/object';

export default class BookTableRowComponent extends Component {
  tagName = ''

  @computed('selectedBookId', 'book')
  get isSelected(){
    return this.selectedBookId == this.book.id
  }

  @action
  selectMyBook(){
    this.selectBook(this.book);
  }

  @action
  toggleMyBook(){
    this.toggleHidden(this.book);
  }
}
