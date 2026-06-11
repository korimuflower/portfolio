import { test, expect } from '@playwright/test';

    // 指定した文字数でランダムな文字列を生成する関数
    // 共通関数として抽出予定

    function randomAlphaNumeric(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

test('プレミアムアカウントを新規作成できること。',async({page}) => {

    // ダミーのメールアドレス・パスワード・氏名を生成
    // 任意項目である住所・電話番号・性別・生年月日は入力しない

    const registrationEmail = `${randomAlphaNumeric(10)}@example.com`;
    const registrationPassword = `${randomAlphaNumeric(12)}`;
    const registrationName = `${randomAlphaNumeric(10)}dummyname`;

    await page.goto('/ja/');

    // 改修により『会員登録』の文言が複数表示される可能性もあるので、ナビゲーションバーをロケーターとして指定
    await page.getByRole('navigation').getByRole('link', { name: '会員登録', exact: true }).click();

    await page.getByLabel('メールアドレス').fill(registrationEmail);
    await page.getByLabel('パスワード 必須').fill(registrationPassword);
    await page.getByLabel('パスワード（確認） 必須').fill(registrationPassword);
    await page.getByLabel('氏名 必須').fill(registrationName);

    await page.getByRole('button',{ name: '登録' }).click();

    // 『マイページ』のテキストと、登録済みのメールアドレスが表示される＝新規作成成功とみなす
    await expect(page.getByRole('heading', { name: 'マイページ' })).toBeVisible();
    await expect(page.getByText(registrationEmail)).toBeVisible();

});
