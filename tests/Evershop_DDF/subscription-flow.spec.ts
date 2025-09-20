import { test, expect } from "@playwright/test";
import { SignupPage } from "../../pages/signupPage";
import { applocators } from "../locators/subscription.locator";
import * as helper from "../utils/helper";
import { testData } from "../data/testData";
import { ENV } from "../utils/env";
import { TAG_P1, TAG_P2 } from "../utils/test-tags";

test.describe(`${TAG_P2}Subscription Flow`, () => {
  test("signup page and Admin validation", async ({ page }) => {
    const signupPage = new SignupPage(page);
    const randomEmail = helper.generateRandomEmail(testData.user.email);

    await test.step("Navigate to homepage and open signup form", async () => {
      await signupPage.navigateTo(ENV.baseURL);
      await signupPage.navigateToSignup();
    });

    await test.step("Fill signup form and register", async () => {
      await signupPage.completeSignup(
        testData.user.name,
        randomEmail,
        testData.user.password
      );
    });

    await test.step("Login as Admin", async () => {
      await signupPage.adminLogin();
    });

    await test.step("Verify new user in Customers list", async () => {
      await signupPage.click(applocators.customersLink);
      const emailCell = signupPage.locator(
        applocators.dynamicCustomerEmailCell(randomEmail)
      );
      await expect(emailCell).toBeVisible();
      await helper.findRecordAndClick(page, randomEmail);
      await page.close();
    });
  });
});
