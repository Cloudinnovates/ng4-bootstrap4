import { browser, by, element } from 'protractor';

export class ModernBusinessBsFourPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mb-root h1')).getText();
  }
}
