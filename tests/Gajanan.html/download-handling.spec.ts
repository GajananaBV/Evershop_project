import { test,expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("download and save file", async ({ page }) => {
await page.goto("http://localhost:4000/gajanan.html");
  await page.getByRole('button', { name: 'Reload' }).click();
  await page.goto('chrome-error://chromewebdata/');
  await page.getByRole('button', { name: 'Reload' }).click();
  await page.getByRole('button', { name: 'Reload' }).click();
  await page.getByRole('button', { name: 'Reload' }).click()

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByTestId("btn-export").click(),
  ]);


  const targetPath = path.join(process.cwd(), 'student.csv');
  await download.saveAs(targetPath);

  const content = fs.readFileSync(targetPath, 'utf-8');
  expect(content).toContain('"ID","Name","Email","Course","Rating"');
  await page.close();
});

