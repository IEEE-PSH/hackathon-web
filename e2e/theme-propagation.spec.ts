import { expect, test } from '@playwright/test'

/**
 * User Story: 
 * 
 * As a user, I would like to modify my theme to light mode on the landing page,
 * and sign in to my account and ensure my theme choice is carried out
 * to all accessible sub-pages throughout the platform for my current session. 
 */

test('Theme Propogation - Light', async function ({ page }) {
    // Start from the index page (the baseURL is set via playwright.config.ts)
    await page.emulateMedia({ colorScheme: 'dark' });

    // Wait for hydration to complete
    await page.waitForLoadState('load');

    await page.goto('/');
    
    await page.getByTestId("toggle-theme").click();

    await expect(page.getByLabel('Toggle theme')).toBeVisible();

    await page.getByRole('menuitem', { name: 'Light' }).click();

    await expect(page.locator('html')).toHaveClass('light');
    await expect(page.locator('html')).toHaveCSS('color-scheme', 'light');
})

/**
 * User Story: 
 * 
 * As a user, I would like to modify my theme to dark mode on the landing page,
 * and sign in to my account and ensure my theme choice is carried out
 * to all accessible sub-pages throughout the platform for my current session. 
 */

test('Theme Propagation - Dark', async function ( { page }) {
    await page.emulateMedia({ colorScheme: 'light' }); // Set theme to opposite, in order to evaluate for change
    
    // Wait for hydration to complete
    await page.waitForLoadState('load');
    
    await page.goto('/');

    await page.getByTestId("toggle-theme").click();

    await expect(page.getByLabel('Toggle theme')).toBeVisible();

    await page.getByRole('menuitem', { name: 'Dark' }).click();

    await expect(page.locator('html')).toHaveClass('dark');
    await expect(page.locator('html')).toHaveCSS('color-scheme', 'dark');
})