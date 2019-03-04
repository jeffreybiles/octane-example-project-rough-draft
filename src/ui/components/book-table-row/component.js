import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class BookTableRowComponent extends Component {
  tagName = ''

  @action
  selectMyBook(){
    this.selectBook(this.book);
  }

  @action
  hideMyBook(){
    this.hideBook(this.book);
  }
}
