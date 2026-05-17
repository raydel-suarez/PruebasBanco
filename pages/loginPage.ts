import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'UserName' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1500);
  }

  async getErrorMessage(): Promise<string> {
    return await this.page.locator('text=Invalid username or password!').textContent() || '';
  }
}
