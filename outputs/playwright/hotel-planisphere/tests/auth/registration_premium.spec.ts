import { test, expect } from '@playwright/test';

    // 指定した文字数でランダムな文字列を生成する関数
    // 今後共通関数として抽出予定

    function randomAlphaNumeric(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

test('プレミアムアカウントを新規作成できること。',async({page}) => {

    // ダミーのメールアドレス・パスワード・氏名を生成
    // 任意項目である住所・電話番号・性別・生年月日は入力しない

    const registrationMailaddress = `${randomAlphaNumeric(10)}@example.com`;

    // 改修により『会員登録』の文言が複数表示される可能性もあるので、ナビゲーションバーをロケーターとして指定
    await page.goto('/ja/');
    await page.locator('nav').getByRole('button', { name: '会員登録'}).click();

    await page.getByLabel('メールアドレス').fill(registrationMailaddress);

});
