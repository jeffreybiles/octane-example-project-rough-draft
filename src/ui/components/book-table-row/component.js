import Component from '@ember/component';
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
}
