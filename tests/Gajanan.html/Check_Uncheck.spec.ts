import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("Check and Uncheck Checkboxes", async ({ page }) => {
  await page.goto("http://localhost:4000/gajanan.html");
  await page.getByLabel("Active").nth(1).check();
  await page.getByLabel("Inactive").check();
  await page.getByLabel("Pending").check();
  await page.getByLabel("Inactive").uncheck();

  await page.getByLabel("Email Notifications").check();
  await page.getByLabel("SMS Alerts").check();
  await page.getByLabel("Push Notifications").check();
  await page.getByLabel("Email Notifications").uncheck();

  await page.pause();

  // Conditional check for "Email Notifications"
  if (!(await page.getByLabel("Email Notifications").isChecked())) {
    await page.getByLabel("Email Notifications").check();
  }
  await page.close();
});
