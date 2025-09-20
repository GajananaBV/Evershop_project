import { test } from "@playwright/test";
import { SignupPage } from "../../pages/signupPage";
import { NewProductPage } from "../../pages/newProductPage";
import { testData } from "../data/testData";
import { ENV } from "../utils/env";
import { TAG_P1, TAG_P2 } from "../utils/test-tags";

test(`${TAG_P2} Add Product in Evershop`, async ({ page }) => {
  const signupPage = new SignupPage(page);
  const newProductPage = new NewProductPage(page);

  await test.step("Login as Admin", async () => {
    await signupPage.adminLogin();
  });

  await test.step("Add New Product and set status", async () => {
    await newProductPage.createNewProduct(
      "iPhone 17 Pro",
      "IPH16PRO123",
      testData.product.category[0],
      testData.product.attributes.Color[0],
      testData.product.attributes.Size[0],
      "50"
    );
    await page.close();
  });
});
