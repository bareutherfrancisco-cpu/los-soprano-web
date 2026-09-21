# Los Soprano Web

Sitio académico no oficial sobre *Los Soprano*. Presenta una sinopsis, las temporadas, un ensayo sobre su legado, personajes, una galería, un video oficial y un formulario de contacto de demostración.

**Sitio publicado:** https://bareutherfrancisco-cpu.github.io/los-soprano-web/

## Consigna cumplida

Se desarrolló un sitio temático de varias páginas con navegación principal y submenús, contenido multimedia, galería filtrable, diseño adaptable a distintos tamaños de pantalla y formulario con validación en el navegador. La versión para GitHub Pages es estática; las mismas páginas también pueden ejecutarse localmente con Laravel.

## Tecnologías

- Laravel 12 y PHP 8.2 o superior para la versión local.
- React 19, Inertia.js 3, Vite 8, Tailwind CSS 4 y CSS para la interfaz.
- GitHub Pages para la publicación estática.

## Navegación

- **Inicio:** portada, familia y negocio, episodios esenciales.
- **La serie:** sinopsis, temporadas y legado.
- **Personajes:** relaciones y retratos.
- **Galería:** elenco, Nueva Jersey y lugares.
- **Multimedia:** video, claves y episodios.
- **Contacto:** formulario de demostración.

## Estructura

- `resources/js/Pages/`: las nueve páginas React.
- `resources/js/Layouts/` y `resources/js/data/`: navegación compartida y contenido.
- `resources/css/app.css`: estilos y adaptación a distintas pantallas.
- `public/assets/`: imágenes y logotipo usados por el sitio.
- `routes/web.php`: rutas de la versión local con Laravel e Inertia.
- `scripts/` y `vite.static.config.js`: generación y vista previa de la versión estática.
- `index.html`, carpetas de páginas y `assets/` en la raíz: archivos publicados por GitHub Pages, regenerados con `npm run build`.
- `FUENTES.md`: procedencia de imágenes, video, tipografías e información.

## Ejecutar localmente

Se necesitan Node.js, Composer y PHP 8.2 o superior. Estas páginas no requieren base de datos.

```powershell
composer install
Copy-Item .env.example .env
php artisan key:generate
npm install
npm run build
php artisan serve
```

Abrí la dirección que muestra Artisan, normalmente `http://127.0.0.1:8000/`. En PowerShell, si la política de ejecución bloquea `npm.ps1`, usá `npm.cmd` en lugar de `npm`.

Para comprobar la versión estática con el mismo tipo de subdirectorio que usa GitHub Pages:

```powershell
npm run preview:static
```

El comando muestra la dirección local de la vista previa. El prefijo de prueba es `soprano-demo` y se puede cambiar con `SITE_PREFIX`.

## Publicación

`npm run build` genera los archivos estáticos en la raíz del repositorio. GitHub Pages publica la rama `main` desde `/`. Cada ruta tiene su propio `index.html` y usa enlaces y recursos relativos para funcionar dentro del subdirectorio del repositorio. GitHub Pages no ejecuta PHP.

Este es un **proyecto académico no oficial**. *Los Soprano* y sus personajes pertenecen a HBO y a sus respectivos titulares. El formulario valida datos y muestra una confirmación, pero no guarda ni envía mensajes. El video incrustado depende de YouTube y requiere conexión a internet.
