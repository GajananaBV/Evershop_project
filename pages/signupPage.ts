import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { testData } from "../tests/data/testData";
import * as helper from "../tests/utils/helper";
import { ENV } from "../tests/utils/env";

import { applocators } from "../tests/locators/subscription.locator";

export class SignupPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToSignup(): Promise<void> {
    await this.locator(applocators.navSignup).nth(1).click();
    await expect(this.locator(applocators.linkCreateAccount)).toBeEnabled();
    await this.locator(applocators.linkCreateAccount).click();
  }

  async completeSignup(
    name: string,
    Email: string,
    password: string
  ): Promise<void> {
    await this.verifyUrl(`${ENV.baseURL}/account/register`);
    await this.fill(applocators.fullNameInput, name);
    await this.fill(applocators.emailInput, Email);
    await this.fill(applocators.passwordInput, password);
    await this.click(applocators.signupButton);
    await this.verifyUrl(ENV.baseURL);
  }

  async adminLogin(): Promise<void> {
    await this.navigateTo(ENV.adminURL);
    await this.fill(applocators.adminEmailInput, testData.admin.email);
    await this.fill(applocators.adminPasswordInput, testData.admin.password);
    await this.click(applocators.adminSigninButton);
    await this.verifyVisible(applocators.customersLink);
    await this.verifyUrl(`${ENV.baseURL}/admin`);
  }
}
