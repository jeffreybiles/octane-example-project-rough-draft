import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class ApplicationController extends Controller {
  @computed('books.@each')
  get sortedBooks(){
    return this.books.sortBy('publicationYear')
  }

  books = [{
    name: 'Brave New World',
    author: 'Aldous Huxley',
    publicationYear: 1932,
    pages: 248,
  }, {
    name: 'The Way of Kings',
    author: 'Brandon Sanderson',
    publicationYear: 2010,
    pages: 1007,
  }, {
    name: 'Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    publicationYear: 1973,
    pages: 2032,
  }, {
    name: 'A Fire Upon the Deep',
    author: 'Vernor Vinge',
    publicationYear: 1992,
    pages: 391,
  }, {
    name: 'Speaker for the Dead',
    author: 'Orson Scott Card',
    publicationYear: 1986,
    pages: 415
  }, {
    name: 'My Hero Academia volume 1',
    author: 'Kohei Horikoshi',
    publicationYear: 2014,
    pages: 192
  }]
}
