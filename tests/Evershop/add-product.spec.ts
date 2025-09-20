import { test, expect } from "@playwright/test";
import { testData } from "../data/testData";
import { applocators, getLocator } from "../locators/subscription.locator";
import { ENV } from "../utils/env";

test("Add Product in Evershop", async ({ page }) => {
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

      await test.step("fill the Product ", async () => {
        await getLocator(page, applocators.product.nameInput).fill(
          "iPhone 16 Pro"
        );
        await getLocator(page, applocators.product.skuInput).fill(
          "IPH16PRO123"
        );
        await getLocator(page, applocators.product.priceInput).fill("1199");
        await getLocator(page, applocators.product.weightInput).fill("0.30");

        // Select category
        await getLocator(page, applocators.product.categoryLink).click();
        await getLocator(page, applocators.product.searchCategory).fill(
          testData.product.category[0]
        );
        const MenSelect = page
          .locator("div")
          .filter({ hasText: /^MenSelect$/ })
          .getByRole("button");
        MenSelect.click();
        // Select Tax class
        //await page.selectOption(applocators.product.taxClassDropdown, "1");

        // SEO fields
        await page
          .locator(applocators.product.urlKeyInput)
          .fill("iphone-16-pro");
        await page
          .locator(applocators.product.metaTitleInput)
          .fill("Apple iPhone 16 Pro");
        await page
          .locator(applocators.product.metaKeywordsInput)
          .fill("iPhone, Apple, Smartphone");
        await getLocator(page, applocators.product.metaDescriptionInput).fill(
          "Latest Apple iPhone 16 Pro with advanced features."
        );

        // Toggles
        await page.locator(applocators.product.enabledToggle).check;
        await expect(page.getByLabel("Enabled")).toBeChecked();
        //Color & Size
        // Select Color (first option from testData)
        await page
          .locator('select[name="attributes[0][value]"]')
          .selectOption(testData.product.attributes.Color[0]);

        // Select Size (first option from testData)
        await page
          .locator('select[name="attributes[1][value]"]')
          .selectOption(testData.product.attributes.Size[0]);

        // Inventory
        await getLocator(page, applocators.product.quantityInput).fill("50");

        // Save product
        await getLocator(page, applocators.product.saveButton).click();
        expect(page.getByText("Product saved successfully!"));

        // Verify product saved
        await page.getByRole("link", { name: "Products", exact: true }).click();
        await expect(page).toHaveURL(/.*\/admin\/products/);
        expect(page.getByRole("link", { name: "iPhone 16 Pro", exact: true }));
        await page.close();
      });
    });
  });
});
