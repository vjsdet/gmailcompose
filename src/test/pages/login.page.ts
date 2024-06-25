import { Page } from "@playwright/test";

class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get txtEmail() {
    return this.page.locator("[type='email']");
  }

  get txtPassword() {
    return this.page.locator("[name='Passwd']");
  }

  get btnNext() {
    return this.page.locator("//button/span[text()='Next']");
  }

  get userMenu() {
    return this.page.locator("a[aria-label='Google apps']");
  }

  get gmailOption() {
    return this.page.frameLocator("//iframe").first().getByText("Gmail");
  }

  async goto() {
    this.page.goto("https://accounts.google.com/");
  }
}
export default LoginPage;
