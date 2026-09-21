import { Head, Link } from '@inertiajs/react';
import { ArrowDownRight } from 'lucide-react';
import SiteLayout from '../Layouts/SiteLayout';

export default function Series() {
    return (
        <SiteLayout>
            <Head title="La serie" />

            <section className="series-opener">
                <div className="series-opener__media" data-parallax>
                    <img src="/assets/img/newark-new-jersey.jpg" alt="Vista aérea del centro de Newark, Nueva Jersey" fetchPriority="high" />
                </div>
                <div className="series-opener__shade" />
                <div className="page-shell series-opener__content">
                    <h1>La<br />serie</h1>
                    <div className="series-opener__summary">
                        <p>Un jefe mafioso de Nueva Jersey empieza terapia después de sufrir ataques de pánico. Lo que cuenta en el consultorio complica todo lo que intenta controlar afuera.</p>
                        <dl>
                            <div><dt>Emisión</dt><dd>1999—2007</dd></div>
                            <div><dt>Creación</dt><dd>David Chase</dd></div>
                            <div><dt>Extensión</dt><dd>86 episodios</dd></div>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="page-shell series-essay">
                <h2 data-reveal>La casa y el negocio nunca están realmente separados.</h2>
                <div className="series-essay__columns" data-reveal>
                    <p>Los Soprano no funciona como una investigación policial. Avanza por acumulación: una sobremesa incómoda, un favor que vuelve como deuda, una mentira doméstica y una decisión violenta pueden ocupar el mismo plano.</p>
                    <p>La terapia le da a Tony un vocabulario para entenderse, pero no garantiza que quiera cambiar. Esa tensión sostiene la serie: cuanto más reconoce sus mecanismos, mejor aprende a justificarlos.</p>
                </div>
                <Link className="editorial-link" href="/la-serie/sinopsis">Continuar con la sinopsis <ArrowDownRight size={18} /></Link>
            </section>

            <figure className="series-landscape" data-parallax>
                <img src="/assets/img/pulaski-skyway.jpg" alt="La autopista Pulaski Skyway atravesando el paisaje industrial de Nueva Jersey" loading="lazy" />
                <figcaption>Nueva Jersey no es un fondo. Sus autopistas, depósitos y barrios marcan la distancia entre la vida suburbana y los negocios que la sostienen.</figcaption>
            </figure>

            <section className="page-shell series-chapters" aria-label="Continuar el recorrido">
                <Link href="/la-serie/temporadas" data-reveal>
                    <h2>Seis temporadas</h2>
                    <p>El mapa completo de alianzas, pérdidas y regresos.</p>
                    <ArrowDownRight aria-hidden="true" />
                </Link>
                <Link href="/personajes" data-reveal>
                    <h2>Dos familias</h2>
                    <p>Las relaciones que ordenan —y desordenan— la vida de Tony.</p>
                    <ArrowDownRight aria-hidden="true" />
                </Link>
            </section>
        </SiteLayout>
    );
}
