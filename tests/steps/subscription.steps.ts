import { Given, When, Then } from "@cucumber/cucumber";
import { expect, chromium, Page, Browser } from "@playwright/test";
import { SignupPage } from "../../pages/signupPage";
import { testData } from "../data/testData";
import { ENV } from "../utils/env";
import * as helper from "../utils/helper";
import { applocators } from "../locators/subscription.locator";

let browser: Browser;
let page: Page;
let signupPage: SignupPage;
let randomEmail: string;

Given("I navigate to the homepage", async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  signupPage = new SignupPage(page);
  await signupPage.navigateTo(ENV.baseURL);
});

When("I open the signup form", async function () {
  await signupPage.navigateToSignup();
});

When("I complete the signup with valid details", async function () {
  randomEmail = helper.generateRandomEmail(testData.user.email);
  await signupPage.completeSignup(
    testData.user.name,
    randomEmail,
    testData.user.password
  );
});

Then("I should be redirected to the homepage", async function () {
  await signupPage.verifyUrl(ENV.baseURL);
});

When("I login as Admin", async function () {
  await signupPage.adminLogin();
});

Then("I should see the newly created user in the Customers list", async function () {
  await signupPage.click(applocators.customersLink);
  const emailCell = signupPage.locator(
    applocators.dynamicCustomerEmailCell(randomEmail)
  );
  await expect(emailCell).toBeVisible();
  page.close();
});
