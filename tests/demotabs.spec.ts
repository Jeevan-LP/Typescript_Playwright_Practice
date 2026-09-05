import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await expect(page.locator('[data-test="product-sort-container"]')).toMatchAriaSnapshot(`
    - combobox:
      - option "Name (A to Z)" [selected]
      - option "Name (Z to A)"
      - option "Price (low to high)"
      - option "Price (high to low)"
    `);
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});