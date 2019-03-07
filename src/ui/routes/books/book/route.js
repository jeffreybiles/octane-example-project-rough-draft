import Route from '@ember/routing/route';

export default class BooksBookRoute extends Route {
  model(params){
    return this.modelFor('books').findBy('id', parseInt(params.book_id))
  }
}
