import { test, expect } from "@playwright/test";
import { SignupPage } from "../../pages/signupPage";
import { NewProductPage } from "../../pages/newProductPage";
import { NewCouponPage } from "../../pages/newCouponPage";
import { applocators } from "../locators/subscription.locator";
import * as helper from "../utils/helper";
import { testData } from "../data/testData";
import { ENV } from "../utils/env";
import { TAG_SMOKE } from "../utils/test-tags";

test.describe(`${TAG_SMOKE}EverShop Smoke Test Suite`, () => {
  let randomEmail: string;
  let couponCode: string;

  test("User Registration Smoke Test", async ({ page }) => {
    const signupPage = new SignupPage(page);

    await test.step("Complete user registration flow", async () => {
      await signupPage.navigateTo(ENV.baseURL);
      await signupPage.navigateToSignup();

      randomEmail = helper.generateRandomEmail(testData.user.email);
      await signupPage.completeSignup(
        testData.user.name,
        randomEmail,
        testData.user.password
      );

      await expect(page).toHaveURL(ENV.baseURL);
    });
  });

  test("Admin Login and Product Creation Smoke Test", async ({ page }) => {
    const signupPage = new SignupPage(page);
    const newProductPage = new NewProductPage(page);

    await test.step("Admin login and product creation", async () => {
      await signupPage.adminLogin();
      await expect(page).toHaveURL(`${ENV.baseURL}/admin`);

      await newProductPage.createNewProduct(
        "iPhone 16 MAX Pro",
        "IPH16PRO123",
        testData.product.category[0],
        testData.product.attributes.Color[0],
        testData.product.attributes.Size[0],
        "50"
      );

      await expect(page.getByText("Product saved successfully!")).toBeVisible();
    });
  });

  test("Coupon Creation Smoke Test", async ({ page }) => {
    const newCouponPage = new NewCouponPage(page);

    await test.step("Coupon creation", async () => {
      couponCode = await newCouponPage.createNewCoupon(
        testData.coupon.generateCode("SMOKE"),
        "Smoke test coupon",
        "15",
        0,
        30,
        testData.coupon.discountTypes[0],
        "50",
        "1",
        "Default",
        testData.admin.email,
        "26"
      );

      await expect(page.getByText("Coupon saved successfully!")).toBeVisible();
    });
  });

  test("Admin Verification Smoke Test", async ({ page }) => {
    const signupPage = new SignupPage(page);

    await test.step("Verify new user in admin panel", async () => {
      await signupPage.adminLogin();
      await signupPage.click(applocators.customersLink);

      const emailCell = signupPage.locator(
        applocators.dynamicCustomerEmailCell(randomEmail)
      );
      await expect(emailCell).toBeVisible();
      await page.close();
    });
  });

});
