import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BookTableRowComponent extends Component {
  // None of these seem to track properly...
  @tracked args;
  @tracked index;
  // @tracked args.index

  get isSelected(){
    return this.args.selectedBookIds.includes(this.args.book.id);
  }

  get isStriped() {
    return this.args.index % 2 === 0
  }
}
