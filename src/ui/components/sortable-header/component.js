import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class SortableHeaderComponent extends Component {
  tagName = ''

  @action sortMyBooks(property, reversed){
    this.sortBooks(property, reversed)
  }
}
