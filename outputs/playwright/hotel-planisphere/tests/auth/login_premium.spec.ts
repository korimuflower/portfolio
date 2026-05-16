import { test, expect } from '@playwright/test';
import { premiumAccount } from '../fixtures/accounts';

test('プレミアムアカウントでログインできること。', async ({ page }) => {
  const { email, password } = premiumAccount();

  await page.goto('/ja/');

  // 『ログイン』ボタンが2つあるので、一度目はナビゲーションバー内を指定
  const navbar = page.locator('nav');
  await navbar.getByRole('button', { name: 'ログイン' }).click();

  await page.getByLabel('メールアドレス').fill(email);
  await page.getByLabel('パスワード').fill(password);

  // 二度目の『ログインボタンはログインフォーム内を指定
  // 『メールアドレス』『パスワード』は1つなので指定していない
  const loginForm = page.locator('form');
  await loginForm.getByRole('button', { name: 'ログイン' }).click();

  // 『マイページ』のテキストと、登録済みのメールアドレスが表示される＝ログイン成功とみなす
  await expect(page.getByRole('heading', { name: 'マイページ' })).toBeVisible();
  await expect(page.getByText(email)).toBeVisible();

});
