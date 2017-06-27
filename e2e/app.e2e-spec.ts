import { VbooksPage } from './app.po';

describe('vbooks App', function() {
  let page: VbooksPage;

  beforeEach(() => {
    page = new VbooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
