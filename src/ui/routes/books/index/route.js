import Route from '@ember/routing/route';

export default class BooksIndexRoute extends Route {
  model(){
    return [{
      id: 1,
      name: 'Brave New World',
      author: 'Aldous Huxley',
      publicationYear: 1932,
      pages: 248,
    }, {
      id: 2,
      name: 'The Way of Kings',
      author: 'Brandon Sanderson',
      publicationYear: 2010,
      pages: 1007,
    }, {
      id: 3,
      name: 'Gulag Archipelago',
      author: 'Aleksandr Solzhenitsyn',
      publicationYear: 1973,
      pages: 2032,
    }, {
      id: 4,
      name: 'A Fire Upon the Deep',
      author: 'Vernor Vinge',
      publicationYear: 1992,
      pages: 391,
    }, {
      id: 5,
      name: 'Speaker for the Dead',
      author: 'Orson Scott Card',
      publicationYear: 1986,
      pages: 415
    }, {
      id: 6,
      name: 'My Hero Academia volume 1',
      author: 'Kohei Horikoshi',
      publicationYear: 2014,
      pages: 192
    }]
  }
}
