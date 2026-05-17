import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('login exitoso con credenciales correctas', async ({ page }) => {
        // Arrange & Act
        await loginPage.login('testuser', 'Test@1234');

        // Assert
        await expect(page).toHaveURL(/profile/);
    });

    test('login fallido con credenciales incorrectas', async () => {
        // Arrange & Act
        await loginPage.login('invalidUser', 'wrongPassword');

        // Assert
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Invalid username or password!');
    });
});