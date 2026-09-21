import { Head } from '@inertiajs/react';
import SiteLayout from '../Layouts/SiteLayout';
import { characters } from '../data/content';

const relations = [
    { name: 'Carmela', relation: 'matrimonio', className: 'relation--carmela' },
    { name: 'Melfi', relation: 'terapia', className: 'relation--melfi' },
    { name: 'Christopher', relation: 'heredero', className: 'relation--christopher' },
    { name: 'Livia', relation: 'origen', className: 'relation--livia' },
];

export default function Characters() {
    return (
        <SiteLayout>
            <Head title="Personajes" />

            <section className="characters-opener">
                <div className="characters-opener__copy">
                    <h1>Personajes</h1>
                    <p>Dos familias organizan la vida de Tony. En ambas, querer a alguien nunca impide usarlo.</p>
                </div>
                <div className="characters-opener__portrait" data-parallax>
                    <img src="/assets/img/james-gandolfini-tour.jpg" alt="James Gandolfini, intérprete de Tony Soprano" fetchPriority="high" />
                </div>
            </section>

            <section id="relaciones" className="page-shell relationships">
                <div className="relationships__heading" data-reveal>
                    <h2>Tony en el centro</h2>
                    <p>Cada vínculo le ofrece una identidad distinta. Ninguno queda fuera del negocio.</p>
                </div>
                <div className="relationship-map" aria-label="Relaciones principales de Tony Soprano" data-reveal>
                    <div className="relationship-map__center"><strong>Tony</strong><span>Soprano</span></div>
                    {relations.map((item) => (
                        <div className={`relationship ${item.className}`} key={item.name}>
                            <strong>{item.name}</strong>
                            <span>{item.relation}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="retratos" className="portrait-index" aria-label="Personajes principales">
                {characters.map((character, index) => (
                    <article className={`portrait-entry ${index % 2 ? 'portrait-entry--reverse' : ''}`} key={character.name} data-reveal>
                        <div className="portrait-entry__image">
                            <img src={character.image} alt={`Retrato de ${character.actor}`} loading="lazy" />
                            <span>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="portrait-entry__copy">
                            <h2>{character.name}</h2>
                            <p className="portrait-entry__actor">{character.actor}</p>
                            <p>{character.role}</p>
                        </div>
                    </article>
                ))}
            </section>
        </SiteLayout>
    );
}
