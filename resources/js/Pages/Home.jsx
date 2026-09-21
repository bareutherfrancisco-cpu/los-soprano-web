import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import SiteLayout from '../Layouts/SiteLayout';
import { episodes } from '../data/content';

export default function Home() {
    return (
        <SiteLayout>
            <Head title="Inicio" />
            <section className="hero-home">
                <div className="hero-home__media">
                    <img src="/assets/img/sopranos-cemetery-hero.webp" alt="Tony Soprano junto a Paulie, Silvio, Christopher y Big Pussy en un cementerio" fetchPriority="high" />
                </div>
                <div className="hero-home__veil" />
                <div className="page-shell hero-home__content">
                    <h1 className="hero-home__logo" data-reveal>
                        <img src="/assets/the-sopranos-logo.svg" alt="Los Soprano" />
                    </h1>
                    <div className="hero-home__side" data-reveal>
                        <span className="road-code" aria-hidden="true">NJ / EXIT 01</span>
                        <p>Tony Soprano dirige una familia criminal y trata de no perder a la suya. Los ataques de pánico lo llevan a un lugar inesperado: el consultorio de una psiquiatra.</p>
                        <Link className="text-link" href="/la-serie/sinopsis">Entrar a la historia <ArrowRight size={16} /></Link>
                    </div>
                </div>
                <span className="scroll-note" aria-hidden="true">Desplazá para entrar</span>
            </section>

            <section id="familia-y-negocio" className="page-shell editorial-intro">
                <div className="editorial-intro__title" data-reveal>
                    <span className="editorial-intro__eyebrow">01 / Dos mundos</span>
                    <h2>Familia<br /><em>y negocio</em></h2>
                </div>
                <div className="editorial-intro__copy">
                    <p className="editorial-intro__lead" data-reveal>En <em>Los Soprano</em>, la violencia no vive lejos de la mesa familiar: <strong>se sienta a comer</strong>, llega tarde y pregunta cómo estuvo el día.</p>
                    <div className="editorial-intro__columns" data-reveal>
                        <p><span>El punto de partida</span>David Chase estrenó la serie en HBO en 1999. Su punto de partida parecía una contradicción: un jefe mafioso con ataques de pánico que comienza terapia. Esa tensión terminó siendo el motor de seis temporadas.</p>
                        <p><span>La doble vida</span>La historia mira a Tony como padre, marido, paciente y criminal sin ordenar esas identidades. El resultado no busca justificarlo: expone cómo cada espacio contamina al siguiente.</p>
                    </div>
                    <Link className="text-link" href="/la-serie">Leer sobre la serie <ArrowRight size={16} /></Link>
                </div>
            </section>

            <section className="full-bleed-story">
                <div className="full-bleed-story__media" data-parallax>
                    <img src="/assets/img/james-gandolfini-tour.jpg" alt="James Gandolfini durante una gira de la USO" loading="lazy" />
                </div>
                <div className="full-bleed-story__shade" />
                <div className="page-shell full-bleed-story__content">
                    <h2 data-reveal>El jefe.<em>El paciente.</em></h2>
                    <div className="full-bleed-story__copy" data-reveal>
                        <p>Tony sabe leer una amenaza y ordenar un negocio. En el consultorio de Melfi, esa experiencia sirve poco: tiene que hablar de su madre, de sus hijos y de un miedo que no puede intimidar.</p>
                        <Link className="text-link" href="/personajes">Conocer a los personajes <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            <section id="episodios-esenciales" className="page-shell episode-section">
                <div className="episode-section__header">
                    <h2 className="section-title" data-reveal>Episodios<br />esenciales</h2>
                    <p className="meta-text">Una selección, no un ranking</p>
                </div>
                <div>
                    {episodes.slice(0, 4).map((episode) => (
                        <article className="episode-line" key={episode.code} data-reveal>
                            <span className="episode-line__code">{episode.code}</span>
                            <h3>{episode.title}</h3>
                            <p>{episode.text}</p>
                        </article>
                    ))}
                </div>
            </section>
        </SiteLayout>
    );
}
