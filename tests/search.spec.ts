import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Busqueda de libros', () => {
    test('Busqueda de libro por titulo exitosa', async ({ page }) => {
        
        const loginPage = new LoginPage(page);
        const bookTitle = 'Git Pocket Guide';

        // Login
        await loginPage.navigate();
        await loginPage.login('testuser', 'Test@1234');

       
        await page.getByRole('textbox', { name: 'Type to search' }).fill(bookTitle);
        await page.getByRole('button').filter({ hasText: /^$/ }).click();
        await page.waitForLoadState('domcontentloaded');

        
        const results = page.getByRole('link', { name: bookTitle });
        await expect(results).toBeVisible();
    });

    test('Busqueda de libro por titulo fallida', async ({ page }) => {
       
        const loginPage = new LoginPage(page);
        const bookTitle = 'Nonexistent Book';

        
        await loginPage.navigate();
        await loginPage.login('testuser', 'Test@1234');

        
        await page.getByRole('textbox', { name: 'Type to search' }).fill(bookTitle);
        await page.getByRole('button').filter({ hasText: /^$/ }).click();
        await page.waitForLoadState('domcontentloaded');

        // Assert
        await expect(page.locator('tbody')).not.toContainText(bookTitle);
        const pageInfo = page.getByText('Page 1 of');
        await expect(pageInfo).toBeVisible();
    });
});