import {Page, expect} from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly baseURL: string = 'https://demoqa.com/books';

    constructor(page: Page) {
        this.page = page;
    }

    async navegateTo(path: string) {
        await this.page.goto(`${this.baseURL}${path}`);
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }

    async click(selector: string) {
        await this.page.click(selector);
    }

    async fill(selector: string, value: string) {
        await this.page.fill(selector, value);
    } 

    async getText(selector: string) : Promise<string | null> {
        return await this.page.textContent(selector);

    }

    async isVisible(selector: string) : Promise<boolean> {
        const visible = await this.page.isVisible(selector);
        await expect(this.page.locator(selector)).toBeVisible();
        return visible;
    }
}