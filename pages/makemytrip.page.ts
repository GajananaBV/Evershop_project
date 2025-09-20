import { Page, Locator, expect } from '@playwright/test';

export class MakeMyTripPage {
    private readonly page: Page;

    // Login modal locators
    readonly modal: Locator;
    readonly personalAccountTab: Locator;
    readonly mybizAccountTab: Locator;
    readonly mobileNumberInput: Locator;
    readonly workEmailInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;

        
        this.modal = page.locator('section[data-cy="CommonModal_2"]');
        this.personalAccountTab = page.getByText('Personal Account');
        this.mybizAccountTab = page.getByText('MyBiz Account');
        this.mobileNumberInput = page.getByRole('textbox', { name: 'Enter Mobile Number', exact: true });
        this.workEmailInput = page.getByRole('textbox', { name: 'Enter your work email id' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    
    async navigateToHomePage() {
        await this.page.goto('https://www.makemytrip.com/');
    
    }

    
    async waitForModal() {
        await this.modal.waitFor({ state: 'visible' });
    }

    async switchToPersonalAccount() {
        await this.personalAccountTab.click();
    }

    async switchToMyBizAccount() {
        await this.mybizAccountTab.click();
    }

    async fillMobileNumber(mobile: string) {
        await this.mobileNumberInput.click();
        await this.mobileNumberInput.fill(mobile);
    }

    async fillWorkEmail(email: string) {
        await this.workEmailInput.click();
        await this.workEmailInput.fill(email);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async closeModalByClickingOutside() {
        await this.page.mouse.click(0, 0);
    }

    async waitForModalToClose() {
        await this.modal.waitFor({ state: 'detached' });
    }

    // Combined method for your specific test flow
    async handleLoginModalFlow() {
        await this.waitForModal();
        
        await this.switchToPersonalAccount();
        await this.switchToMyBizAccount();
        await this.switchToPersonalAccount();

        await this.fillMobileNumber('8855881275');
        await this.clickContinue();

        await this.switchToMyBizAccount();
        await this.fillWorkEmail('test@example.com');

        await this.closeModalByClickingOutside();
        await this.waitForModalToClose();
    }

    
    async closePage() {
        await this.page.close();
    }

    async isModalVisible(): Promise<boolean> {
        return await this.modal.isVisible();
    }
}