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

    const registrationMailaddress = `${randomAlphaNumeric(10)}@example.com`;
    const registrationPassword = `${randomAlphaNumeric(12)}`;
    const registrationName = `${randomAlphaNumeric(10)}dummyname`;

    // 改修により『会員登録』の文言が複数表示される可能性もあるので、ナビゲーションバーをロケーターとして指定
    await page.goto('/ja/');
    await page.locator('nav').getByRole('link', { name: '会員登録'}).click();

    await page.getByLabel('メールアドレス').fill(registrationMailaddress);
    await page.getByLabel('パスワード 必須').fill(registrationPassword);
    await page.getByLabel('パスワード（確認） 必須').fill(registrationPassword);
    await page.getByRole('button',{ name: '登録' }).click();

    // ToDo:登録後の画面表示を確認し、作成が成功したことを示す

});
