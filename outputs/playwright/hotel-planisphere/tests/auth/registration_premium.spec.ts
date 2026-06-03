import { test, expect } from '@playwright/test';

    // ランダムな文字列を生成する関数
    // 今後共通関数として抽出予定

    function randomAlphaNumeric(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

test('プレミアムアカウントを新規作成できること。',async({page}) => {

    await page.goto('/ja/');



});

