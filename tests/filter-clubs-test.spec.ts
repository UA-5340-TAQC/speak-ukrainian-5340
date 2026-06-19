import { test, expect } from '@playwright/test';
import {ClubPage} from '@/pages/club-page';
import { CitiesUser } from '@/data/cities-user';

test.describe('Filter clubs', () => {
  test('[TC-5]: Filter clubs by city', async ({ page }) => {
    const clubPage = new ClubPage(page);
    await clubPage.navigate();
    expect(await clubPage.isEnabledAdvancedSearchButton()).toBeTruthy();

    await clubPage.clickAdvancedSearchButton();
    //expect(await clubPage.advancedSearch.isCityDropdownVisible()).toBeTruthy();
    await clubPage.filterByCity(CitiesUser.KHARKIV);
    //await clubPage.selectCity(CitiesUser.KHARKIV);


  });
});
