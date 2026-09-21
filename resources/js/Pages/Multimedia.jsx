import { Head } from '@inertiajs/react';
import SiteLayout from '../Layouts/SiteLayout';
import { episodes } from '../data/content';

export default function Multimedia() {
    return (
        <SiteLayout>
            <Head title="Multimedia" />
            <section className="page-shell video-stage">
                <div className="video-stage__heading">
                    <h1 data-reveal>Multimedia</h1>
                    <p data-reveal>Un video promocional oficial de HBO y una guía breve de episodios que muestran distintas caras de la serie. El video no se reproduce automáticamente.</p>
                </div>
                <div id="trailer" className="video-frame" data-reveal>
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/eQQGQa3lTGs?rel=0"
                        title="Video oficial del 25 aniversario de Los Soprano publicado por HBO"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div id="claves" className="media-sequence">
                    <article data-reveal><h2>Una apertura en movimiento</h2><p>“Woke Up This Morning”, de Alabama 3, acompaña el viaje de Tony desde Nueva York hasta Nueva Jersey. Antes de la primera escena, la ruta ya contó de dónde viene y dónde vive.</p></article>
                    <article data-reveal><h2>Miradas y espacios</h2><p>Interiores oscuros, marcos dentro del cuadro y silencios largos vuelven visible la distancia entre los personajes.</p></article>
                    <article data-reveal><h2>El corte también cuenta</h2><p>La serie confía en asociaciones, sueños y elipsis. No explica cada consecuencia: algunas aparecen cuando los personajes ya creen haberlas dejado atrás.</p></article>
                </div>
            </section>
            <section id="episodios" className="page-shell episode-section">
                <div className="episode-section__header"><h2 className="section-title" data-reveal>Seis episodios</h2><p className="meta-text">Con spoilers mínimos</p></div>
                {episodes.map((episode) => <article className="episode-line" key={episode.code} data-reveal><span className="episode-line__code">{episode.code}</span><h3>{episode.title}</h3><p>{episode.text}</p></article>)}
            </section>
        </SiteLayout>
    );
}
