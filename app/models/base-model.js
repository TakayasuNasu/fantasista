export default class Base {
  constructor(title = 'Hello world') {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
}
