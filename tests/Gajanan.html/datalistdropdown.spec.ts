import { test, expect } from "@playwright/test";

test("Handle datalist dropdown", async ({ page }) => {
await page.goto("http://localhost:4000/gajanan.html");


  // Step 1: Get all options inside datalist
  const allOptions = await page.locator("#courses option").all();
  console.log("Total options:", allOptions.length);

  // Step 2: Print each option value using a simple for loop
  for (let i = 0; i < allOptions.length; i++) {
    const text = await allOptions[i].getAttribute("value");
    console.log(`Option ${i + 1}: ${text}`);
  }

  // Step 3: Select an option by filling into input
  await page.locator("#courseInput").fill("Cypress");

  // Step 4: Verify the selected value in input field
  await expect(page.locator("#courseInput")).toHaveValue("Cypress");
  await page.close();
});