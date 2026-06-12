import type { Locator } from '@playwright/test';

import { BaseComponent } from './base-component';

export class NewsCardComponent extends BaseComponent {
  constructor(rootLocator: Locator) {
    super(rootLocator);
  }
}
