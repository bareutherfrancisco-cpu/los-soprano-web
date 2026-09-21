import { Head } from '@inertiajs/react';
import SiteLayout from '../Layouts/SiteLayout';
import { seasons } from '../data/content';

export default function Seasons() {
    return (
        <SiteLayout>
            <Head title="Temporadas" />

            <section className="page-shell seasons-opener">
                <div>
                    <h1>Seis<br />temporadas</h1>
                    <p>Ocho años de alianzas frágiles, conversaciones inconclusas y consecuencias que siempre llegan acompañadas.</p>
                </div>
                <div className="route-marker" aria-label="Nueva Jersey, 86 episodios">
                    <span>New Jersey</span>
                    <strong>86</strong>
                    <small>episodios</small>
                </div>
            </section>

            <figure className="seasons-road" data-parallax>
                <img src="/assets/img/pulaski-skyway.jpg" alt="Pulaski Skyway, parte del paisaje vial de Nueva Jersey" fetchPriority="high" />
                <figcaption>1999 <span /> 2007</figcaption>
            </figure>

            <section className="page-shell season-timeline" aria-label="Cronología de temporadas">
                {seasons.map((season, index) => (
                    <article className="season-stop" key={season.number} data-reveal>
                        <div className="season-stop__marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                        <div className="season-stop__date">
                            <strong>{season.year}</strong>
                            <span>{season.episodes}</span>
                        </div>
                        <p>{season.text}</p>
                    </article>
                ))}
            </section>
        </SiteLayout>
    );
}
