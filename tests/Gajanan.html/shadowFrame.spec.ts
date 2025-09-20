import { test, expect } from "@playwright/test";

test("Handle Shadow DOM input and button", async ({ page }) => {
  // Load your HTML file
  await page.goto("http://localhost:4000/gajanan.html");

  // Step 1: Type into shadow input
  const shadowInput = page.locator("#shadow-host").locator("#shadowInput");
  await shadowInput.fill("Hello Shadow DOM");

  // Step 2: Click shadow button
  await page.locator("#shadow-host").locator("#shadowBtn").click();

  // Step 3: Verify updated value
  await expect(shadowInput).toHaveValue("Clicked inside shadow");
  await page.close();
});
