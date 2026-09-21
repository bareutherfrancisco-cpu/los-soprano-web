import { useEffect } from 'react';

export function Link({ href, children, ...props }) {
    const [pathname, fragment] = href.split('#');
    const path = pathname === '/' ? './' : `${pathname.replace(/^\//, '').replace(/\/$/, '')}/`;

    return <a href={`${path}${fragment ? `#${fragment}` : ''}`} {...props}>{children}</a>;
}

export function Head({ title }) {
    useEffect(() => {
        document.title = `${title} — Los Soprano`;
    }, [title]);

    return null;
}

export function usePage() {
    return { url: globalThis.__SITE_ROUTE__ ?? '/' };
}
