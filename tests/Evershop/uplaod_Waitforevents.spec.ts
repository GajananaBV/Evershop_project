import { test, expect } from "@playwright/test";
import { testData } from "../data/testData";
import { applocators, getLocator } from "../locators/subscription.locator";
import { ENV } from "../utils/env";

test("File Uplaod", async ({ page }) => {
  await test.step("Login as Admin", async () => {
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(
      testData.admin.email
    );
    await getLocator(page, applocators.adminPasswordInput).fill(
      testData.admin.password
    );
    await getLocator(page, applocators.adminSigninButton).click();
    await test.step("Add New Product and set status", async () => {
      await page.getByRole("link", { name: "New Product" }).click();

      const [fileChooser] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("#images div"),
      ]);

      
      await fileChooser.setFiles(ENV.fileUploadPath);
      const uploaded = page.locator("#images div").first();
      await expect(uploaded).toBeVisible();

      await page.close();
    });
  });
});
