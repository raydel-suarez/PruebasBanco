import { Page } from '@playwright/test';

export class BooksPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getUsername(): Promise<string> {
    try {
      const username = await this.page.getByText(/testuser|User Name/).first().textContent({ timeout: 10000 });
      return username || '';
    } catch {
      return '';
    }
  }

  async logout() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
    await this.page.waitForLoadState('networkidle');
  }
}
