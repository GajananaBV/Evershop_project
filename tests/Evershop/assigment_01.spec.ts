import { test, expect } from "@playwright/test";
import { testData } from "../data/testData";
import { applocators, getLocator } from "../locators/subscription.locator";
import { ENV } from "../utils/env";

test.describe("Product Attribute Selection", () => {
  test("Product Attribute Selection", async ({ page }) => {
    await page.goto(ENV.adminURL);
    await getLocator(page, applocators.adminEmailInput).fill(
      testData.admin.email
    );
    await getLocator(page, applocators.adminPasswordInput).fill(
      testData.admin.password
    );
    await getLocator(page, applocators.adminSigninButton).click();

    await test.step("Add Color and set Size", async () => {
      await page.getByRole("link", { name: "Products", exact: true }).click();
      await page
        .getByRole("link", { name: "Striped Cotton Sweater", exact: true })
        .click();

      //all color and size combinations
      for (const color of testData.product.attributes.Color) {
        for (const size of testData.product.attributes.Size) {
          console.log(`Testing Color: ${color}, Size: ${size}`);

          // color
          await page
            .locator('select[name="attributes[0][value]"]')
            .selectOption(color);

          // size
          await page
            .locator('select[name="attributes[1][value]"]')
            .selectOption(size);
        }
      }
    });
  });
});

/*
    // Select Color (first option from testData)
    await page
      .locator('select[name="attributes[0][value]"]')
      .selectOption(testData.product.attributes.Color[0]);
    
    // Select Size (first option from testData)
    await page
      .locator('select[name="attributes[1][value]"]')
      .selectOption(testData.product.attributes.Size[0]);

    // Save product
    await page.getByRole("button", { name: "Save" }).click();

    // Verify success message
    await expect(page.getByText("Product saved successfully!")).toBeVisible();
   
  
});
});    */
