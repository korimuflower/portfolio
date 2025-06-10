import { test, expect } from '@playwright/test';

test('要素の追加・削除ができること。', async ({ page }) => {
  // 該当の画面に遷移
  await page.goto('/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();

  await page.getByRole('button', { name: 'Add Element' }).click();

  // 削除ボタンを押せる＝追加に成功したとみなす
  await page.getByRole('button', { name: 'Delete' }).click();

  // 削除ボタンが非表示＝削除に成功したことを確認
  await expect(page.getByRole('button', { name: 'Delete' })).toBeHidden();

});
