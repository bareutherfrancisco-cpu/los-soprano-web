import { Head } from '@inertiajs/react';
import SiteLayout from '../Layouts/SiteLayout';

export default function Synopsis() {
    return (
        <SiteLayout>
            <Head title="Sinopsis" />

            <section className="synopsis-opener">
                <div className="synopsis-opener__copy">
                    <h1>Sinopsis</h1>
                    <p>Tony Soprano sabe resolver problemas ajenos. El conflicto empieza cuando se desmaya y tiene que mirar los propios.</p>
                </div>
                <div className="synopsis-opener__media" data-parallax>
                    <img src="/assets/img/classic-diner.jpg" alt="Interior de un diner estadounidense clásico" fetchPriority="high" />
                </div>
            </section>

            <section className="page-shell therapy-room">
                <div className="therapy-room__portraits" data-reveal>
                    <img className="therapy-room__tony" src="/assets/img/james-gandolfini-tour.jpg" alt="James Gandolfini durante una visita a tropas estadounidenses" loading="lazy" />
                    <img className="therapy-room__melfi" src="/assets/img/lorraine-bracco.jpg" alt="Lorraine Bracco, intérprete de Jennifer Melfi" loading="lazy" />
                </div>
                <div className="therapy-room__copy" data-reveal>
                    <h2>El consultorio</h2>
                    <p>Tony vive con Carmela y sus hijos, Meadow y A.J., en North Caldwell. También dirige buena parte de una organización criminal. Cuando los ataques de pánico lo llevan al consultorio de la doctora Jennifer Melfi, empieza una conversación que debe ocultar a sus socios.</p>
                    <p>En terapia aparecen su madre Livia, su tío Junior, el matrimonio y una sensación persistente de haber llegado tarde a algo. Afuera, cada decisión hace más difícil el cambio que dice buscar.</p>
                </div>
            </section>

            <blockquote className="synopsis-quote" data-reveal>
                <p>Entender el daño no es lo mismo que dejar de hacerlo.</p>
            </blockquote>

            <section className="page-shell two-families">
                <h2 data-reveal>La misma palabra para dos mundos</h2>
                <div className="two-families__columns">
                    <article data-reveal>
                        <h3>Carmela, Meadow y A.J.</h3>
                        <p>Carmela conoce el origen de su bienestar y busca una distancia moral que nunca termina de sostener. Sus hijos crecen entre el privilegio y las respuestas evasivas.</p>
                    </article>
                    <article data-reveal>
                        <h3>Christopher, Silvio y Paulie</h3>
                        <p>La otra familia mezcla negocios, afecto y amenaza. La lealtad ofrece protección, pero cualquier deuda puede convertirse en una condena.</p>
                    </article>
                </div>
            </section>
        </SiteLayout>
    );
}
