import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { computed } from '@ember/object';

export default class BookTableRowComponent extends Component {
  tagName = ''

  @computed('selectedBookIds', 'book')
  get isSelected(){
    return this.selectedBookIds.includes(this.book.id);
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
