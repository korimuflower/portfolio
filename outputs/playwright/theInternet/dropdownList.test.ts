import { test, expect } from '@playwright/test';

test('ドロップダウンに、必要な選択肢がすべて存在すること。', async ({ page }) => {
  await page.goto('/');

  // 該当の画面に遷移
  await page.getByRole('link', { name: 'Dropdown' }).click();

  // ドロップダウンをクリック
  await page.getByRole('combobox', { name: '' }).click();

  // 非活性の選択肢も含め、3つ表示されていることを確認
  await expect(page.getByRole('option', { name: 'Please select an option' })).toBeDisabled();
  await expect(page.getByRole('option', { name: 'Option 1' })).toHaveText('Option 1');
  await expect(page.getByRole('option', { name: 'Option 2' })).toHaveText('Option 2');

});
