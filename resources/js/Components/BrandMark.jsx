import { Link } from '@inertiajs/react';

export default function BrandMark({ compact = false }) {
    return (
        <Link href="/" className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-label="Los Soprano, ir al inicio">
            <img src="/assets/the-sopranos-logo.svg" alt="" aria-hidden="true" />
        </Link>
    );
}
