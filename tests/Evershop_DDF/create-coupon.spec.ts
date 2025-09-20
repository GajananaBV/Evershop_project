import { test } from "@playwright/test";
import { SignupPage } from "../../pages/signupPage";
import { NewCouponPage } from "../../pages/newCouponPage";
import { testData } from "../data/testData";
import { ENV } from "../utils/env";
import { TAG_P1 } from "../utils/test-tags";

test(`${TAG_P1}Create New Coupon in Evershop`, async ({ page }) => {
  const signupPage = new SignupPage(page);
  const newCouponPage = new NewCouponPage(page);

  await test.step("Login as Admin", async () => {
    await signupPage.adminLogin();
  });

  await test.step("Create New Coupon", async () => {
    const couponCode = await newCouponPage.createNewCoupon(
      testData.coupon.generateCode("AUTO"),
      "Automation test coupon description",
      "15",
      0,
      30,
      testData.coupon.discountTypes[0],
      "50",
      "1",
      "Default",
      testData.admin.email,
      "25"
    );

    console.log(`Created coupon with code: ${couponCode}`);
    await page.close();
  });
});
