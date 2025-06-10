# Test info

- Name: ドロップダウンに、必要な選択肢がすべて存在すること。
- Location: C:\Users\joke8\portfolio\outputs\playwright\theInternet\dropdownList.test.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('option', { name: 'Please select an option', disabled: true })
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('option', { name: 'Please select an option', disabled: true })
    9 × locator resolved to <option value="" disabled="disabled" selected="selected">Please select an option</option>
      - unexpected value "hidden"

    at C:\Users\joke8\portfolio\outputs\playwright\theInternet\dropdownList.test.ts:15:32
```

# Page snapshot

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "Dropdown List" [level=3]
- combobox:
  - option "Please select an option" [disabled] [selected]
  - option "Option 1"
  - option "Option 2"
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('ドロップダウンに、必要な選択肢がすべて存在すること。', async ({ page }) => {
   4 |   await page.goto('/');
   5 |
   6 |   // 該当の画面に遷移
   7 |   await page.getByRole('link', { name: 'Dropdown' }).click();
   8 |
   9 |   await page.getByRole('combobox', { name: '' }).click();
  10 |
  11 |   const disabledOption = page.getByRole('option', {
  12 |     name: 'Please select an option',
  13 |     disabled: true,
  14 |   });
> 15 |   await expect(disabledOption).toBeVisible();
     |                                ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  16 |   await expect(page.getByRole('option', { name: 'Option 1' })).toBeVisible();
  17 |   await expect(page.getByRole('option', { name: 'Option 2' })).toBeVisible();
  18 |
  19 | });
  20 |
```