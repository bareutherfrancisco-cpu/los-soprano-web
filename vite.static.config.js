import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    base: './',
    publicDir: false,
    plugins: [
        react(),
        tailwindcss(),
        {
            name: 'relative-public-assets',
            enforce: 'pre',
            transform(code, id) {
                if (id.includes('/resources/js/') || id.includes('\\resources\\js\\')) {
                    return code.replaceAll('/assets/', 'assets/');
                }

                return null;
            },
        },
    ],
    resolve: {
        alias: [{
            find: '@inertiajs/react',
            replacement: fileURLToPath(new URL('./resources/js/static-inertia.jsx', import.meta.url)),
        }],
    },
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: { input: 'resources/js/static-client.jsx' },
    },
});
