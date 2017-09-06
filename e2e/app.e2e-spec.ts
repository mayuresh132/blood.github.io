import { BloodBuddiesPage } from './app.po';

describe('blood-buddies App', () => {
  let page: BloodBuddiesPage;

  beforeEach(() => {
    page = new BloodBuddiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
