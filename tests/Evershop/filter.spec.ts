import { test, expect } from "@playwright/test";
import {testData} from "../data/testData";
import { applocators, getLocator } from "../locators/subscription.locator";
import { ENV } from "../utils/env";

test("Handle filter", async ({ page }) => {


  await test.step("Login as Admin", async () => {
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(testData.admin.email);
    await getLocator(page, applocators.adminPasswordInput).fill(testData.admin.password);
    await getLocator(page, applocators.adminSigninButton).click();
    await test.step("Add New Product and set status", async () => {
    await page.getByRole("link", { name: "New Product" }).click();

    
    await page.getByLabel("Disabled").check();
    await expect(page.getByLabel("Disabled")).toBeChecked();
    await page.getByLabel("Enabled").check();
    await expect(page.getByLabel("Enabled")).toBeChecked();
    await page.getByLabel("Enabled").uncheck();
    await page.close();
    });
  });
});