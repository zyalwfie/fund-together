import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/fund-together/',
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                beforeLogin: resolve(__dirname, 'before-login-index.html'),
                account: resolve(__dirname, 'account.html'),
                profile: resolve(__dirname, 'profile.html'),
                category: resolve(__dirname, 'category.html'),
                categoryDetail: resolve(__dirname, 'category-detail.html'),
                postDetail: resolve(__dirname, 'post-detail.html'),
                donorDetail: resolve(__dirname, 'donor-detail.html'),
                donate: resolve(__dirname, 'donate.html'),
                confirmDonate: resolve(__dirname, 'confirm-donate.html'),
                payments: resolve(__dirname, 'payments.html'),
                paymentsSuccess: resolve(__dirname, 'payments-success.html'),
                history: resolve(__dirname, 'history.html'),
                signup: resolve(__dirname, 'signup.html'),
                signin: resolve(__dirname, 'signin.html'),
            },
        },
    },
});
