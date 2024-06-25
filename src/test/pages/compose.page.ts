import { Page } from "@playwright/test";

class ComposePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get txtSubject() {
    return this.newMessage.locator("[placeholder='Subject']");
  }

  get txtMessage() {
    return this.newMessage.locator("div[aria-label='Message Body']").last();
  }

  get txtToRecipient() {
    return this.newMessage.locator("[aria-label='To recipients']");
  }

  get newMessage() {
    return this.page.locator("[aria-label='New Message']");
  }

  get btnCompose() {
    return this.page.getByText("Compose");
  }

  get btnSend() {
    return this.page.locator("//div[text()='Send']");
  }

  lblMessage(text: string) {
    return this.page.getByText(text);
  }
}
export default ComposePage;
