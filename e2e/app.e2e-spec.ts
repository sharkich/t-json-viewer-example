import { TJsonViewerExamplePage } from './app.po';

describe('t-json-viewer-example App', () => {
  let page: TJsonViewerExamplePage;

  beforeEach(() => {
    page = new TJsonViewerExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
