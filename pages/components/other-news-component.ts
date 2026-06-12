import type { Locator } from '@playwright/test';

import { BaseComponent } from './base-component';
import { NewsCardComponent } from './news-card-component';

export class OtherNewsComponent extends BaseComponent {
  private readonly carousel: Locator;
  private readonly cards: Locator;
  private readonly nextButton: Locator;
  private readonly prevButton: Locator;
  private readonly pagination: Locator;
  private readonly newsCardComponent: NewsCardComponent;

  constructor(rootLocator: Locator) {
    super(rootLocator);
    this.carousel = this.root.locator('.other-news');
    this.cards = this.carousel.locator('.carousel-item');
    this.nextButton = this.carousel.locator('[aria-label="arrow-left"]');
    this.prevButton = this.carousel.locator('[aria-label="arrow-right"]');
    this.pagination = this.carousel.locator('ul.slick-dots');
    this.newsCardComponent = new NewsCardComponent(this.root);
  }

  async clickLeftArrow(): Promise<void> {
    await this.nextButton.click();
  }

  async clickRightArrow(): Promise<void> {
    await this.prevButton.click();
  }

  async getVisibleTitles(): Promise<string[]> {
    const count = await this.cards.count();
    const titles: string[] = [];

    for (let i = 0; i < count; i++) {
      const item = this.cards.nth(i);
      if (!(await item.isVisible())) continue;
      const card = this.getCard(i);
      const title = await card.getNewsTitle();

      titles.push(title ?? '');
    }

    return titles;
  }

  getCard(index: number): NewsCardComponent {
    return new NewsCardComponent(this.page, this.cards.nth(index).toString());
  }
}
