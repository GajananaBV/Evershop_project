import { Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { applocators } from "../tests/locators/subscription.locator";
import { testData } from "../tests/data/testData";
import * as helper from "../tests/utils/helper";

export class NewCouponPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigate to new coupon page
  async navigateToNewCoupon(): Promise<void> {
    await this.click(applocators.newCouponLink);
    await expect(
      this.page.getByRole("heading", { name: "Create a new coupon" })
    ).toBeVisible();
  }

  // Fill general coupon information
  async fillGeneralInfo(
    code: string = testData.coupon.generateCode(),
    description: string = "Automation test coupon",
    discountAmount: string = "10"
  ): Promise<string> {
    await this.fill(applocators.couponCodeInput, code);
    await this.fill(applocators.couponDescriptionInput, description);
    await this.fill(applocators.discountAmountInput, discountAmount);
    // Set free shipping option
    await this.page
      .locator("label")
      .filter({ hasText: "Free shipping?" })
      .locator("span")
      .first()
      .click();

    return code;
  }

  // Set coupon dates
  async setCouponDates(
    startDaysFromToday: number = 0,
    endDaysFromToday: number = 7
  ): Promise<void> {
    // Set start date
    await this.click(applocators.startDate);
    await helper.selectdate(this.page, startDaysFromToday);

    // Set end date
    await this.click(applocators.endDate);
    await helper.selectdate(this.page, endDaysFromToday, true);
  }

  // Select discount type
  async selectDiscountType(
    discountType: string = testData.coupon.defaultDiscountType
  ): Promise<void> {
    await applocators.discountTypeRadio(this.page, discountType).click();
  }

  // Set order conditions
  async setOrderConditions(
    minPurchaseAmount: string = "100",
    minPurchaseQty: string = "2",
    customerGroup: string = "Default",
    customerEmails: string = testData.admin.email,
    purchasedAmount: string = "50"
  ): Promise<void> {
    // Set minimum purchase amount
    await this.fill(applocators.minPurchaseAmountInput, minPurchaseAmount);

    // Set minimum purchase quantity
    await this.fill(applocators.minPurchaseQtyInput, minPurchaseQty);

    // Select customer group
    await this.page.locator(applocators.customerGroupDropdown).click();
    await this.click(applocators.customerGroupOption(customerGroup));

    // Set customer emails
    await this.fill(applocators.customerEmailsInput, customerEmails);

    // Set purchased amount
    await this.fill(applocators.purchasedAmountInput, purchasedAmount);
  }

  // Save coupon
  async saveCoupon(): Promise<void> {
    await this.click(applocators.couponSaveButton);
  }

  // Verify coupon was saved successfully
  async verifyCouponSaved(couponCode: string): Promise<void> {
    // Check for success message

    await expect(
      applocators.successMessage(this.page, "Coupon saved successfully!")
    ).toBeVisible();
    // Navigate back to coupons list
    await applocators.backButton(this.page).click();

    // Verify coupon appears in the list
    await expect(
      this.locator(applocators.couponCell(couponCode))
    ).toBeVisible();
  }

  // Complete coupon creation flow
  async createNewCoupon(
    code?: string,
    description?: string,
    discountAmount?: string,

    startDaysFromToday?: number,
    endDaysFromToday?: number,
    discountType?: string,
    minPurchaseAmount?: string,
    minPurchaseQty?: string,
    customerGroup?: string,
    customerEmails?: string,
    purchasedAmount?: string
  ): Promise<string> {
    await this.navigateToNewCoupon();

    const couponCode = await this.fillGeneralInfo(
      code,
      description,
      discountAmount
    );

    await this.setCouponDates(startDaysFromToday, endDaysFromToday);
    await this.selectDiscountType(discountType);
    await this.setOrderConditions(
      minPurchaseAmount,
      minPurchaseQty,
      customerGroup,
      customerEmails,
      purchasedAmount
    );

    await this.saveCoupon();
    await this.verifyCouponSaved(couponCode);

    return couponCode;
  }
}
