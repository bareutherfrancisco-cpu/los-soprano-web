export default function PageHero({ title, intro, image, children, align = 'left' }) {
    return (
        <section className={`page-hero ${align === 'right' ? 'page-hero--right' : ''}`}>
            <div className="page-hero__media" data-parallax>
                <img src={image} alt="" />
            </div>
            <div className="page-hero__veil" />
            <div className="page-shell page-hero__content">
                <h1 data-reveal>{title}</h1>
                <p data-reveal>{intro}</p>
                {children}
            </div>
        </section>
    );
}
