import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';

const directory = resolve('docs');
const prefix = `/${(process.env.SITE_PREFIX ?? 'soprano-demo').replace(/^\/+|\/+$/g, '')}/`;
const port = Number(process.env.PORT ?? 8765);
const types = {
    '.css': 'text/css',
    '.html': 'text/html',
    '.ico': 'image/x-icon',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain',
    '.webp': 'image/webp',
};

createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://site.invalid').pathname);

    if (!pathname.startsWith(prefix)) {
        response.writeHead(404).end('Not found');
        return;
    }

    const relative = pathname.slice(prefix.length);
    let file = resolve(join(directory, relative));

    if (file !== directory && !file.startsWith(`${directory}${sep}`)) {
        response.writeHead(403).end('Forbidden');
        return;
    }

    try {
        if ((await stat(file)).isDirectory()) {
            file = join(file, 'index.html');
        }

        const data = await readFile(file);
        response.writeHead(200, { 'content-type': `${types[extname(file)] ?? 'application/octet-stream'}; charset=utf-8` }).end(data);
    } catch {
        response.writeHead(404).end('Not found');
    }
}).listen(port, '127.0.0.1', () => {
    process.stdout.write(`Vista previa: http://127.0.0.1:${port}${prefix}\n`);
});
