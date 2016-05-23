export class RawtimePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rawtime-app h1')).getText();
  }
}
