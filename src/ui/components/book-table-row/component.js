import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { computed } from '@ember/object';

export default class BookTableRowComponent extends Component {
  tagName = ''

  @computed('selectedBookIds.[]', 'book')
  get isSelected(){
    return this.selectedBookIds.includes(this.book.id);
  }

  @computed('index')
  get isStriped() {
    return this.index % 2 === 0
  }

  @action toggleMySelection(){
    this.toggleSelection(this.book, this.isSelected);
  }

  @action toggleMyBook(){
    this.toggleHidden(this.book);
  }
}
