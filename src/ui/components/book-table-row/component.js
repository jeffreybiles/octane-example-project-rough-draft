import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BookTableRowComponent extends Component {
  @tracked selectedBookIds = [];
  @tracked book = {};
  @tracked index;

  get isSelected(){
    return this.selectedBookIds.includes(this.book.id);
  }

  get isStriped() {
    console.log(this.index)
    return this.index % 2 === 0
  }
}
