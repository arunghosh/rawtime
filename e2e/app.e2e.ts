import { RawtimePage } from './app.po';

describe('rawtime App', function() {
  let page: RawtimePage;

  beforeEach(() => {
    page = new RawtimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rawtime works!');
  });
});
