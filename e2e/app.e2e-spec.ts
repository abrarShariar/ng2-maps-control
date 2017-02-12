import { Ng2GoogleMapsPage } from './app.po';

describe('ng2-google-maps App', function() {
  let page: Ng2GoogleMapsPage;

  beforeEach(() => {
    page = new Ng2GoogleMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
