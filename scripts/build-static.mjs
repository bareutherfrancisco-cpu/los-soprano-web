import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const pages = [
    { route: '/', component: 'Home', title: 'Inicio' },
    { route: '/la-serie', component: 'Series', title: 'La serie' },
    { route: '/la-serie/sinopsis', component: 'Synopsis', title: 'Sinopsis' },
    { route: '/la-serie/temporadas', component: 'Seasons', title: 'Temporadas' },
    { route: '/la-serie/legado', component: 'Legacy', title: 'Legado' },
    { route: '/personajes', component: 'Characters', title: 'Personajes' },
    { route: '/galeria', component: 'Gallery', title: 'Galería' },
    { route: '/multimedia', component: 'Multimedia', title: 'Multimedia' },
    { route: '/contacto', component: 'Contact', title: 'Contacto' },
];

const manifest = JSON.parse(readFileSync('docs/.vite/manifest.json', 'utf8'));
const entry = manifest['resources/js/static-client.jsx'];

if (!entry?.file || !entry?.css?.length) {
    throw new Error('La compilación estática no produjo JavaScript y CSS.');
}

const vite = await createServer({
    configFile: 'vite.static.config.js',
    server: { middlewareMode: true },
    appType: 'custom',
});

try {
    for (const { route, component, title } of pages) {
        globalThis.__SITE_ROUTE__ = route;
        const { default: Page } = await vite.ssrLoadModule(`/resources/js/Pages/${component}.jsx`);
        const markup = renderToString(createElement(Page));
        const depth = route.split('/').filter(Boolean).length;
        const base = depth ? '../'.repeat(depth) : './';
        const html = `<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#090909">
    <meta name="description" content="Sitio académico no oficial sobre Los Soprano, la serie de David Chase.">
    <base href="${base}">
    <title>${title} — Los Soprano</title>
    <link rel="icon" type="image/svg+xml" href="assets/the-sopranos-logo.svg">
    ${entry.css.map((file) => `<link rel="stylesheet" href="${file}">`).join('\n    ')}
    <script>window.__SITE_PAGE__=${JSON.stringify(component)};window.__SITE_ROUTE__=${JSON.stringify(route)};</script>
    <script type="module" src="${entry.file}"></script>
</head>
<body>
    <div id="app">${markup}</div>
</body>
</html>
`;
        const directory = join('docs', route.slice(1));
        mkdirSync(directory, { recursive: true });
        writeFileSync(join(directory, 'index.html'), html);
    }
} finally {
    await vite.close();
    delete globalThis.__SITE_ROUTE__;
}

cpSync('public/assets', 'docs/assets', { recursive: true });
cpSync('public/robots.txt', 'docs/robots.txt');
writeFileSync('docs/.nojekyll', '');
rmSync('docs/.vite', { recursive: true });

rmSync('assets', { recursive: true, force: true });
cpSync('docs/assets', 'assets', { recursive: true });

for (const { route } of pages) {
    const directory = route.slice(1);
    mkdirSync(directory || '.', { recursive: true });
    cpSync(join('docs', directory, 'index.html'), join(directory, 'index.html'));
}

cpSync('docs/robots.txt', 'robots.txt');
writeFileSync('.nojekyll', '');
