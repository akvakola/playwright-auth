import { test, expect } from "@playwright/test";
import "dotenv/config";

test("Login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.locator("#login2").click();
  if (
    process.env.USERNAME !== "undefined" &&
    process.env.PASSWORD !== "undefined"
  ) {
    await page.locator("#loginusername").fill(process.env.USERNAME as string);
    await page.locator("#loginpassword").fill(process.env.PASSWORD as string);
  } else {
    throw new Error("Missing env variables");
  }
  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page.getByText("Welcome vnovacki")).toBeVisible();
});
