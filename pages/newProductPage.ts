import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { testData } from "../tests/data/testData";
import { applocators } from "../tests/locators/subscription.locator";
import { ENV } from "../tests/utils/env";

export class NewProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigate to new product page
  async navigateToNewProduct(): Promise<void> {
    await this.click(applocators.product.newProductLink);
  }

  // Fill basic product information
  async fillBasicProductInfo(
    productName: string = "/",
    sku: string = "/"
  ): Promise<void> {
    await this.fill(applocators.product.nameInput, productName);
    await this.fill(applocators.product.skuInput, sku);
    await this.fill(applocators.product.priceInput, "15000");
    await this.fill(applocators.product.weightInput, "0.30");
  }

  // Select product category
  async selectCategory(
    category: string = testData.product.category[0]
  ): Promise<void> {
    await this.click(applocators.product.categoryLink);
    await this.fill(applocators.product.searchCategory, category);
    await applocators.product.menSelectButton(this.page).click();
  }

  //upload the Product Image
  async uploadFile() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.page.click("#images div"),
    ]);

    await fileChooser.setFiles(ENV.fileUploadPath);
    const uploaded = this.page.locator("#images div").first();
    await expect(uploaded).toBeVisible();
  }

  // Fill SEO information
  async fillSeoInfo(): Promise<void> {
    await this.page
      .locator(applocators.product.urlKeyInput)
      .fill("iphone-16-pro");
    await this.page
      .locator(applocators.product.metaTitleInput)
      .fill("Apple iPhone 16 Pro");
    await this.page
      .locator(applocators.product.metaKeywordsInput)
      .fill("iPhone, Apple, Smartphone");
    await this.fill(
      applocators.product.metaDescriptionInput,
      "Latest Apple iPhone 16 Pro with advanced features."
    );
  }

  // Set product status toggles
  async setProductStatus(): Promise<void> {
    //await this.locator(applocators.product.enabledToggle).check;
    await expect(this.page.getByLabel("Enabled")).toBeChecked();
  }

  // Select product attributes
  async selectAttributes(
    color: string = testData.product.attributes.Color[0],
    size: string = testData.product.attributes.Size[0]
  ): Promise<void> {
    await this.page
      .locator('select[name="attributes[0][value]"]')
      .selectOption(color);
    await this.page
      .locator('select[name="attributes[1][value]"]')
      .selectOption(size);
  }

  // Set inventory quantity
  async setInventory(quantity: string = "50"): Promise<void> {
    await this.fill(applocators.product.quantityInput, quantity);
  }

  // Save the product
  async saveProduct(): Promise<void> {
    await this.click(applocators.product.saveButton);
  }

  // Verify product was saved successfully
  async verifyProductSaved(
    productName: string = "iPhone 17 Pro"
  ): Promise<void> {
    // Check for success message
    await expect(
      this.page.getByText("Product saved successfully!")
    ).toBeVisible();

    // Navigate to products page
    await this.click(applocators.product.productsLink);
    await this.verifyUrl("/.*/admin/products/");

    // Verify product appears in list
    await expect(
      this.page.getByRole("link", { name: productName, exact: true })
    ).toBeVisible();
  }

  // Complete product creation flow
  async createNewProduct(
    productName?: string,
    sku?: string,
    category?: string,
    color?: string,
    size?: string,
    quantity?: string
  ): Promise<void> {
    await this.navigateToNewProduct();
    await this.fillBasicProductInfo(productName, sku);
    await this.selectCategory(category);
    await this.uploadFile();
    await this.fillSeoInfo();
    await this.setProductStatus();
    await this.selectAttributes(color, size);
    await this.setInventory(quantity);
    await this.saveProduct();
    await this.verifyProductSaved(productName);
  }
}
