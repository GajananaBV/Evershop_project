import { test, expect } from "@playwright/test";

test.describe("Mouse & Keyboard Events", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4000/gajanan.html");
  });

  test("Hover displays tooltip", async ({ page }) => {
    await page.getByTestId("hover-target").hover();
    await expect(page.locator("#hoverResult")).toHaveText("Hovered!");
  });

  test("Double-click updates text", async ({ page }) => {
    await page.getByTestId("dbl-target").dblclick();
    await expect(page.locator("#dblResult")).toHaveText("Double clicked!");
  });

  test("Right-click updates text", async ({ page }) => {
    await page.getByTestId("right-target").click({ button: "right" });
    await expect(page.locator("#rightResult")).toHaveText("Right clicked!");
  });

  test("Keyboard typing inside editable", async ({ page }) => {
    const editable = page.getByTestId("editable");
    await editable.click();
    await page.keyboard.type(" Playwright Rocks!");
    await expect(editable).toContainText("Playwright Rocks!");
  });
});
