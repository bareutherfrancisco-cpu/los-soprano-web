import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import BrandMark from '../Components/BrandMark';
import { navigation } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {
    const { url } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef({});
    const menuButtonRef = useRef(null);
    const dropdownButtonRefs = useRef({});

    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [url]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                if (openDropdown) {
                    if (dropdownRefs.current[openDropdown]?.contains(document.activeElement)) {
                        dropdownButtonRefs.current[openDropdown]?.focus();
                    }
                    setOpenDropdown(null);
                    return;
                }
                if (menuOpen) {
                    menuButtonRef.current?.focus();
                    setMenuOpen(false);
                }
            }
        };

        document.body.classList.toggle('nav-open', menuOpen);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.classList.remove('nav-open');
            document.removeEventListener('keydown', handleEscape);
        };
    }, [menuOpen, openDropdown]);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return undefined;
        }

        const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
        const updateLenis = (time) => lenis.raf(time * 1000);

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return undefined;
        }

        const context = gsap.context(() => {
            gsap.utils.toArray('[data-reveal]').forEach((element) => {
                gsap.fromTo(element, { y: 38, opacity: 0 }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: element, start: 'top 88%', once: true },
                });
            });

            gsap.utils.toArray('[data-parallax] img').forEach((image) => {
                gsap.fromTo(image, { yPercent: -5, scale: 1.06 }, {
                    yPercent: 5,
                    scale: 1.01,
                    ease: 'none',
                    scrollTrigger: { trigger: image.parentElement, scrub: 0.7, start: 'top bottom', end: 'bottom top' },
                });
            });
        });

        return () => context.revert();
    }, [url]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            setOpenDropdown((current) => current && !dropdownRefs.current[current]?.contains(event.target) ? null : current);
        };

        document.addEventListener('pointerdown', handleOutsideClick);
        return () => document.removeEventListener('pointerdown', handleOutsideClick);
    }, []);

    const isActive = (href) => href === '/' ? url === '/' : url.startsWith(href);

    return (
        <>
            <a className="skip-link" href={`${url === '/' ? './' : `${url.replace(/^\//, '')}/`}#contenido`}>Saltar al contenido</a>
            <header className="site-header">
                <div className="site-header__inner">
                    <BrandMark compact />
                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="menu-toggle"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                        aria-controls="navegacion-principal"
                        onClick={() => {
                            setMenuOpen((value) => !value);
                            setOpenDropdown(null);
                        }}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                    <nav id="navegacion-principal" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegación principal">
                        {navigation.map((item) => item.children ? (
                            <div
                                className={`nav-group ${openDropdown === item.href ? 'nav-group--open' : ''}`}
                                key={item.href}
                                ref={(node) => { dropdownRefs.current[item.href] = node; }}
                                onPointerEnter={(event) => {
                                    if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 1025px) and (hover: hover)').matches) {
                                        setOpenDropdown(item.href);
                                    }
                                }}
                                onPointerLeave={(event) => {
                                    if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 1025px) and (hover: hover)').matches) {
                                        setOpenDropdown((current) => current === item.href ? null : current);
                                    }
                                }}
                            >
                                <div className="nav-group__topline">
                                    <Link className={isActive(item.href) ? 'is-active' : ''} href={item.href} onClick={() => setOpenDropdown(null)}>{item.label}</Link>
                                    <button
                                        ref={(node) => { dropdownButtonRefs.current[item.href] = node; }}
                                        type="button"
                                        aria-haspopup="true"
                                        aria-label={`${openDropdown === item.href ? 'Cerrar' : 'Abrir'} submenú de ${item.label}`}
                                        aria-expanded={openDropdown === item.href}
                                        aria-controls={`submenu-${item.href === '/' ? 'inicio' : item.href.slice(1)}`}
                                        onClick={() => setOpenDropdown((current) => current === item.href ? null : item.href)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'ArrowDown') {
                                                event.preventDefault();
                                                setOpenDropdown(item.href);
                                            }
                                            if (event.key === 'Escape') {
                                                event.stopPropagation();
                                                setOpenDropdown(null);
                                            }
                                        }}
                                    >
                                        <ChevronDown size={15} />
                                    </button>
                                </div>
                                <div id={`submenu-${item.href === '/' ? 'inicio' : item.href.slice(1)}`} className="submenu" inert={openDropdown !== item.href}>
                                    {item.children.map((child) => (
                                        <Link key={child.href} className={url === child.href ? 'is-active' : ''} href={child.href} onClick={() => { setOpenDropdown(null); setMenuOpen(false); }}>{child.label}</Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={item.href} className={isActive(item.href) ? 'is-active' : ''} href={item.href}>{item.label}</Link>
                        ))}
                    </nav>
                </div>
            </header>
            <button
                className={`main-nav__backdrop ${menuOpen ? 'is-visible' : ''}`}
                type="button"
                aria-label="Cerrar menú"
                aria-hidden={!menuOpen}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => {
                    setMenuOpen(false);
                    setOpenDropdown(null);
                    menuButtonRef.current?.focus();
                }}
            />

            <main id="contenido">{children}</main>

            <footer className="site-footer">
                <div className="site-footer__brand">
                    <BrandMark />
                    <p>Un archivo académico sobre familia, poder y televisión.</p>
                </div>
                <nav aria-label="Navegación del pie">
                    {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                </nav>
                <div className="site-footer__credits">
                    <p>Proyecto académico no oficial. Los Soprano y sus personajes pertenecen a HBO y a sus respectivos titulares.</p>
                    <p>Investigación, diseño y desarrollo · 2026</p>
                </div>
            </footer>
        </>
    );
}
