import { test, expect } from "@playwright/test";

test.describe("Bulk Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Select all students", async ({ page }) => {
    await page.getByTestId("select-all").click();
    const checkboxes = page.locator("tbody input[type='checkbox']");
    await expect(checkboxes).toHaveCount(3);
    await expect(checkboxes).toBeChecked();
  });

  test("Delete selected students", async ({ page }) => {
    await page.getByTestId("select-all").click();
    await page.getByRole("button", { name: "Delete Selected" }).click();

    await expect(page.getByRole("row")).toHaveCount(1); // header only
  });
});