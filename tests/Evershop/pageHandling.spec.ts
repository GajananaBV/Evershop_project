import { test, expect, Page, chromium } from "@playwright/test";
import { getLocator, applocators } from "../locators/subscription.locator";
import {testData} from "../data/testData";
import { ENV } from "../utils/env";
import { error } from "console";

// pass complete browser context - 1 solution{ scalable }
// pass context -solution
// pass nothing -browser (flaky)

test("search data ", async ({ page, context }) => {
  //Login As admin
  await page.goto(ENV.adminURL);
  await getLocator(page, applocators.adminEmailInput).fill(
    testData.admin.email
  );
  await getLocator(page, applocators.adminPasswordInput).fill(
    testData.admin.password
  );
  await getLocator(page, applocators.adminSigninButton).click();

  //click on product
  await page.getByRole("link", { name: "Products", exact: true }).click();

  const [page1] = await Promise.all([
    context.waitForEvent("page"),
    await page
      .getByRole("link", { name: "Striped Cotton Sweater" })
      .click({ button: "middle" }),
  ]);
  await page1.getByRole("textbox", { name: "Name" }).fill("test");
  await page.close();
});
