import { test, expect } from "@playwright/test";

test("Handle keyboard events and interactions", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  // 1. Hover test
  await page.getByTestId("hover-target").hover();
  await expect(page.locator("#hoverResult")).toHaveText("Hover event fired"); 

  // 2. Double click test
  await page.getByTestId("dbl-target").dblclick();
  await expect(page.locator("#dblResult")).toHaveText("Double click detected");

  // 3. Right click (context click)
  await page.getByTestId("right-target").click({ button: "right" });
  await expect(page.locator("#rightResult")).toHaveText("Right click/contextmenu detected");

   const editable = page.getByTestId("editable");

  await editable.click(); // focus
  await page.keyboard.press("Control+A"); 
  await page.keyboard.press("Backspace"); // clear text
  await page.keyboard.type("Playwright Keyboard Test");

  await expect(editable).toHaveText("Playwright Keyboard Test");
  });