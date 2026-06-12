import type { Page } from '@playwright/test';

import { BasePage } from './base-page';

export class NewsDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
