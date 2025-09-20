import { test, expect } from "@playwright/test";

test.describe("Drag & Drop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Drag box into drop zone", async ({ page }) => {
    const dragBox = page.getByTestId("drag-box");
    const dropZone = page.getByTestId("drop-zone");

    await dragBox.dragTo(dropZone);

    await expect(page.locator("#dropResult")).toHaveText("Dropped successfully!");
    await page.close();
  });
});