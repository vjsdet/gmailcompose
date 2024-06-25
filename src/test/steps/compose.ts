import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../pages/login.page";
import ComposePage from "../pages/compose.page";
import { fixture } from "../hooks/pageFixture";
import { Page, expect } from "@playwright/test";
import { Logger } from "winston";
require("dotenv").config();
const timeout = 30000;
const waitForTimeout = 10000;
let page: Page;
let logger: Logger;
setDefaultTimeout(60000);
let login: LoginPage;
let compose: ComposePage;

Given("User navigates to the application", async function () {
  page = fixture.page;
  logger = fixture.logger;
  login = new LoginPage(page);
  await login.goto();
  await new Promise((r) => setTimeout(r, waitForTimeout));
  //Assertion for page title
  await expect(page).toHaveTitle("Sign in - Google Accounts");
  logger.info("User has navigated to the login page");
});

Then("User enter the email", async function () {
  const email: any = process.env.EMAIL;
  //Assertion for email field
  await expect(login.txtEmail).toBeVisible({ timeout: timeout });
  await login.txtEmail.fill(email);
  //Assertion for entered email
  await expect(login.txtEmail).toHaveValue(email, { timeout: timeout });
  logger.info("User has entered the email");
});

Then("User enter the password", async function () {
  const password: any = process.env.PASSWORD;
  //Assertion for password field
  await expect(login.txtPassword).toBeVisible({ timeout: timeout });
  await login.txtPassword.fill(password);
  //Assertion for entered password
  await expect(login.txtPassword).toHaveValue(password, { timeout: timeout });
  logger.info("User has entered the password");
});

When("User click the next button", async function () {
  //Assertion for Next button
  await expect(login.btnNext).toBeVisible({ timeout: timeout });
  await login.btnNext.click();
  await new Promise((r) => setTimeout(r, waitForTimeout));
  logger.info("User has clicked the Next button");
});

Then("User can see and select the gmail option from menu", async function () {
  //Assertion for user menu
  await expect(login.userMenu).toBeVisible({ timeout: timeout });
  await login.userMenu.click();
  const [gmail] = await Promise.all([
    fixture.context.waitForEvent("page"),
    await login.gmailOption.click(),
  ]);
  await gmail.bringToFront();
  compose = new ComposePage(gmail);
  logger.info("User has selected the gmail option from menu");
});

Then("User compose the new email", async function () {
  //Assertion for compose button
  await expect(compose.btnCompose).toBeVisible({ timeout: timeout });
  await compose.btnCompose.click();
  await new Promise((r) => setTimeout(r, waitForTimeout));
  logger.info("User has composed the new email");
});

Then("User enter the subject as {string}", async function (subject: string) {
  //Assertion for subject field
  await expect(compose.txtSubject).toBeVisible({ timeout: timeout });
  await compose.txtSubject.fill(subject);
  //Assertion for entered subject
  await expect(compose.txtSubject).toHaveValue(subject, { timeout: timeout });
  logger.info(`User has entered the subject as ${subject}`);
});

Then("User enter the message as {string}", async function (message: string) {
  //Assertion for message field
  await expect(compose.txtMessage).toBeVisible({ timeout: timeout });
  await compose.txtMessage.fill(message);
  //Assertion for entered message
  await expect(compose.txtMessage).toHaveValue(message, { timeout: timeout });
  logger.info(`User entered the message as ${message}`);
});

Then(
  "User enter the to recipient as {string}",
  async function (recipient: string) {
    //Assertion for ToRecipient field
    await expect(compose.txtToRecipient).toBeVisible({ timeout: timeout });
    await compose.txtToRecipient.fill(recipient);
    //Assertion for ToRecipient field
    await expect(compose.txtToRecipient).toHaveValue(recipient, {
      timeout: timeout,
    });
    logger.info(`User entered the recipient as ${recipient}`);
  }
);

Then("User click on the Send button", async function () {
  //Assertion for Send button
  await expect(compose.btnSend).toBeVisible({ timeout: timeout });
  await compose.btnSend.click();
  logger.info("User has clicked the Send button");
});

Then("User can see the message as {string}", async function (message: string) {
  const msg = compose.lblMessage(message);
  //Assertion for message
  await expect(msg).toBeVisible({ timeout: timeout });
  logger.info(`User can see the message as ${message}`);
});
