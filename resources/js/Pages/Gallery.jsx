import { Head } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import SiteLayout from '../Layouts/SiteLayout';
import { galleryItems } from '../data/content';

const filters = [
    { value: 'todos', label: 'Todas' },
    { value: 'elenco', label: 'Elenco' },
    { value: 'new-jersey', label: 'Nueva Jersey' },
    { value: 'lugares', label: 'Lugares' },
];

export default function Gallery() {
    const [filter, setFilter] = useState('todos');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const closeButtonRef = useRef(null);
    const lightboxRef = useRef(null);
    const openerRef = useRef(null);
    const filteredItems = useMemo(
        () => filter === 'todos' ? galleryItems : galleryItems.filter((item) => item.category === filter),
        [filter],
    );
    const selectedItem = selectedIndex === null ? null : filteredItems[selectedIndex];

    useEffect(() => {
        const applyHashFilter = () => {
            const requestedFilter = window.location.hash.slice(1);
            setFilter(filters.some((item) => item.value === requestedFilter) ? requestedFilter : 'todos');
            setSelectedIndex(null);
        };

        applyHashFilter();
        window.addEventListener('hashchange', applyHashFilter);
        return () => window.removeEventListener('hashchange', applyHashFilter);
    }, []);

    const closeLightbox = () => {
        setSelectedIndex(null);
        window.setTimeout(() => openerRef.current?.focus(), 0);
    };

    const showPrevious = () => setSelectedIndex((index) => (index - 1 + filteredItems.length) % filteredItems.length);
    const showNext = () => setSelectedIndex((index) => (index + 1) % filteredItems.length);

    useEffect(() => {
        if (!selectedItem) {
            document.body.style.overflow = '';
            return undefined;
        }

        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowLeft') showPrevious();
            if (event.key === 'ArrowRight') showNext();
            if (event.key === 'Tab') {
                const controls = [...lightboxRef.current.querySelectorAll('button')];
                const first = controls[0];
                const last = controls[controls.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedItem]);

    const openLightbox = (index, event) => {
        openerRef.current = event.currentTarget;
        setSelectedIndex(index);
    };

    return (
        <SiteLayout>
            <Head title="Galería" />
            <section className="page-shell gallery-page">
                <div className="gallery-page__heading">
                    <h1 data-reveal>Galería</h1>
                    <div className="gallery-filters" aria-label="Filtrar galería" data-reveal>
                        {filters.map((item) => (
                            <button
                                type="button"
                                key={item.value}
                                className={filter === item.value ? 'is-active' : ''}
                                aria-pressed={filter === item.value}
                                onClick={() => {
                                    setFilter(item.value);
                                    setSelectedIndex(null);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="gallery-grid">
                    {filteredItems.map((item, index) => (
                        <button className={`gallery-item gallery-item--${item.layout ?? 'portrait'}`} type="button" key={item.src} onClick={(event) => openLightbox(index, event)} data-reveal>
                            <img src={item.src} alt={item.alt} loading="lazy" />
                            <span className="gallery-item__caption">
                                <span><strong>{item.title}</strong><small>{item.detail}</small></span>
                                <small>{String(index + 1).padStart(2, '0')}</small>
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            {selectedItem && (
                <div ref={lightboxRef} className="lightbox" role="dialog" aria-modal="true" aria-label={`Imagen ampliada: ${selectedItem.title}`} onPointerDown={(event) => event.target === event.currentTarget && closeLightbox()}>
                    <button ref={closeButtonRef} className="lightbox__close" type="button" onClick={closeLightbox} aria-label="Cerrar imagen"><X /></button>
                    <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={showPrevious} aria-label="Imagen anterior"><ChevronLeft /></button>
                    <figure className="lightbox__figure">
                        <img src={selectedItem.src} alt={selectedItem.alt} />
                        <figcaption><span><strong>{selectedItem.title}</strong><small>{selectedItem.detail}</small></span><span>{selectedIndex + 1} / {filteredItems.length}</span></figcaption>
                    </figure>
                    <button className="lightbox__nav lightbox__nav--next" type="button" onClick={showNext} aria-label="Imagen siguiente"><ChevronRight /></button>
                </div>
            )}
        </SiteLayout>
    );
}
