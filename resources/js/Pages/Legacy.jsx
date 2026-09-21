import { Head } from '@inertiajs/react';
import SiteLayout from '../Layouts/SiteLayout';

const chapters = [
    {
        title: 'Tiempo de cine, escala de serie',
        text: 'Los Soprano confirmó que la televisión podía sostener silencio, ambigüedad y una puesta en escena paciente durante años. El formato largo dejó que sus personajes cambiaran sin volverse coherentes de golpe.',
    },
    {
        title: 'Después del antihéroe',
        text: 'Muchos protagonistas posteriores heredaron la mezcla de carisma, inteligencia y daño de Tony. La influencia más valiosa, sin embargo, fue confiar en un público capaz de convivir con alguien incómodo sin pedir que la historia lo absuelva.',
    },
    {
        title: 'El corte',
        text: '“Made in America” terminó en 2007 con un corte abrupto a negro. La discusión sobre lo que ocurre después continúa, pero el efecto principal sucede antes: durante unos segundos miramos el restaurante con la atención paranoica de Tony.',
    },
];

export default function Legacy() {
    return (
        <SiteLayout>
            <Head title="Legado" />

            <section className="legacy-opener">
                <img src="/assets/img/newark-new-jersey.jpg" alt="Vista aérea de Newark, Nueva Jersey" fetchPriority="high" />
                <div className="legacy-opener__veil" />
                <div className="legacy-opener__title">
                    <h1>Legado</h1>
                    <p>Una serie que cambió la escala de la televisión sin dejar de observar una mesa familiar, un consultorio y una ruta de Nueva Jersey.</p>
                </div>
            </section>

            <section className="page-shell legacy-ledger">
                {chapters.map((chapter, index) => (
                    <article key={chapter.title} data-reveal>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <h2>{chapter.title}</h2>
                        <p>{chapter.text}</p>
                    </article>
                ))}
            </section>

            <section className="final-cut" data-reveal>
                <p>No explicó el final.<br />Cambió la forma de esperar uno.</p>
                <span aria-hidden="true" />
            </section>
        </SiteLayout>
    );
}
