import Route from '@ember/routing/route';

export default class BooksBookRoute extends Route {
  model(params){
    return params.book_id
  }
}
