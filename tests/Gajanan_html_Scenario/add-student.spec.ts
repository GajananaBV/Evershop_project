import { test, expect } from "@playwright/test";

test("Form submission works", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");

  await page.fill("#nameInput", "Gajanan");
  await page.fill("#emailInput", "gajanan@example.com");
  await page.fill("#courseInput", "Playwright");

  

  
  await page.click("#addBtn");

  
  await expect(page.locator("tbody tr:last-child .cell-name")).toHaveText("Gajanan");
});
