import '../css/app.css';

import { hydrateRoot } from 'react-dom/client';

const pages = import.meta.glob('./Pages/*.jsx', { eager: true });
const Page = pages[`./Pages/${window.__SITE_PAGE__}.jsx`]?.default;

if (Page) {
    hydrateRoot(document.getElementById('app'), <Page />);
}
