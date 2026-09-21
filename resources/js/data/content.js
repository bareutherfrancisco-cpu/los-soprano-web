export const navigation = [
    {
        label: 'Inicio', href: '/', children: [
            { label: 'Portada', href: '/#contenido' },
            { label: 'Familia y negocio', href: '/#familia-y-negocio' },
            { label: 'Episodios esenciales', href: '/#episodios-esenciales' },
        ],
    },
    {
        label: 'La serie',
        href: '/la-serie',
        children: [
            { label: 'Sinopsis', href: '/la-serie/sinopsis' },
            { label: 'Temporadas', href: '/la-serie/temporadas' },
            { label: 'Legado', href: '/la-serie/legado' },
        ],
    },
    {
        label: 'Personajes', href: '/personajes', children: [
            { label: 'Relaciones', href: '/personajes/#relaciones' },
            { label: 'Retratos', href: '/personajes/#retratos' },
        ],
    },
    {
        label: 'Galería', href: '/galeria', children: [
            { label: 'Elenco', href: '/galeria/#elenco' },
            { label: 'Nueva Jersey', href: '/galeria/#new-jersey' },
            { label: 'Lugares', href: '/galeria/#lugares' },
        ],
    },
    {
        label: 'Multimedia', href: '/multimedia', children: [
            { label: 'Tráiler', href: '/multimedia/#trailer' },
            { label: 'Claves', href: '/multimedia/#claves' },
            { label: 'Episodios', href: '/multimedia/#episodios' },
        ],
    },
    { label: 'Contacto', href: '/contacto' },
];

export const seasons = [
    { number: '01', year: '1999', episodes: '13 episodios', text: 'Tony llega al consultorio de Melfi después de sufrir ataques de pánico. Mientras intenta sostener su casa, la salud de Jackie Aprile abre una disputa silenciosa por el poder.' },
    { number: '02', year: '2000', episodes: '13 episodios', text: 'El regreso de Richie Aprile y la traición de Big Pussy tensan una organización que ya no puede separar amistad, negocio y supervivencia.' },
    { number: '03', year: '2001', episodes: '13 episodios', text: 'Meadow entra a la universidad, Jackie Jr. busca un lugar que no comprende y la familia atraviesa el duelo por Livia.' },
    { number: '04', year: '2002', episodes: '13 episodios', text: 'El dinero, el resentimiento y las infidelidades erosionan el matrimonio. La separación entre Tony y Carmela deja de ser una amenaza abstracta.' },
    { number: '05', year: '2004', episodes: '13 episodios', text: 'Viejos miembros recuperan la libertad y obligan a revisar lealtades. Tony Blundetto convierte el conflicto con Nueva York en una deuda personal.' },
    { number: '06', year: '2006–07', episodes: '21 episodios', text: 'Dos bloques finales llevan la serie hacia sus consecuencias: identidad, deterioro, guerra y una última cena que todavía se discute.' },
];

export const characters = [
    { name: 'Tony Soprano', actor: 'James Gandolfini', image: '/assets/img/james-gandolfini.jpg', role: 'Padre, esposo y jefe en ascenso. Su terapia revela un hombre capaz de observarse sin que esa lucidez alcance para cambiarlo.' },
    { name: 'Carmela Soprano', actor: 'Edie Falco', image: '/assets/img/edie-falco.jpg', role: 'Administra la casa y negocia a diario con el origen de su comodidad. Su vínculo con Tony combina amor, dependencia y cálculo.' },
    { name: 'Dra. Jennifer Melfi', actor: 'Lorraine Bracco', image: '/assets/img/lorraine-bracco.jpg', role: 'La psiquiatra que escucha a Tony. El consultorio es el único espacio donde el poder no garantiza una salida fácil.' },
    { name: 'Christopher Moltisanti', actor: 'Michael Imperioli', image: '/assets/img/michael-imperioli.jpg', role: 'Protegido de Tony, impulsivo y ambicioso. Quiere ser guionista y mafioso, dos relatos de sí mismo que nunca logra conciliar.' },
    { name: 'Silvio Dante', actor: 'Steven Van Zandt', image: '/assets/img/steven-van-zandt.jpg', role: 'Consigliere metódico y dueño del Bada Bing. Suele leer el clima de una habitación antes que el resto.' },
    { name: 'Meadow Soprano', actor: 'Jamie-Lynn Sigler', image: '/assets/img/jamie-lynn-sigler.jpg', role: 'La hija mayor cuestiona la hipocresía familiar, aunque también aprende a beneficiarse de sus reglas.' },
    { name: 'Paulie Gualtieri', actor: 'Tony Sirico', image: '/assets/img/tony-sirico.jpg', role: 'Supersticioso, susceptible y feroz. Su comicidad nunca termina de esconder la violencia.' },
    { name: 'Adriana La Cerva', actor: 'Drea de Matteo', image: '/assets/img/drea-de-matteo.jpg', role: 'Pareja de Christopher y figura central de una de las tragedias más duras de la serie.' },
    { name: 'Junior Soprano', actor: 'Dominic Chianese', image: '/assets/img/dominic-chianese.jpg', role: 'Tío de Tony, formado en un código anterior. Su disputa por el mando convive con el avance de la vejez.' },
    { name: 'Janice Soprano', actor: 'Aida Turturro', image: '/assets/img/aida-turturro.jpg', role: 'Hermana de Tony, regresa a Nueva Jersey con un talento familiar para detectar ventajas y heridas.' },
];

export const galleryItems = [
    { src: '/assets/img/james-gandolfini-tour.jpg', title: 'James Gandolfini', detail: 'El rostro detrás de Tony Soprano', category: 'elenco', layout: 'wide', alt: 'James Gandolfini durante una visita a tropas estadounidenses' },
    { src: '/assets/img/edie-falco.jpg', title: 'Edie Falco', detail: 'Carmela, el centro moral en disputa', category: 'elenco', layout: 'portrait', alt: 'Retrato de la actriz Edie Falco' },
    { src: '/assets/img/lorraine-bracco.jpg', title: 'Lorraine Bracco', detail: 'La doctora Jennifer Melfi', category: 'elenco', alt: 'Retrato de la actriz Lorraine Bracco' },
    { src: '/assets/img/michael-imperioli.jpg', title: 'Michael Imperioli', detail: 'Christopher Moltisanti', category: 'elenco', alt: 'Retrato del actor Michael Imperioli' },
    { src: '/assets/img/steven-van-zandt.jpg', title: 'Steven Van Zandt', detail: 'Silvio Dante', category: 'elenco', alt: 'Steven Van Zandt durante una presentación' },
    { src: '/assets/img/jamie-lynn-sigler.jpg', title: 'Jamie-Lynn Sigler', detail: 'Meadow Soprano', category: 'elenco', alt: 'Retrato de Jamie-Lynn Sigler' },
    { src: '/assets/img/tony-sirico.jpg', title: 'Tony Sirico', detail: 'Paulie Gualtieri', category: 'elenco', alt: 'Retrato del actor Tony Sirico' },
    { src: '/assets/img/drea-de-matteo.jpg', title: 'Drea de Matteo', detail: 'Adriana La Cerva', category: 'elenco', alt: 'Retrato de la actriz Drea de Matteo' },
    { src: '/assets/img/dominic-chianese.jpg', title: 'Dominic Chianese', detail: 'Corrado “Junior” Soprano', category: 'elenco', alt: 'Retrato del actor Dominic Chianese' },
    { src: '/assets/img/aida-turturro.jpg', title: 'Aida Turturro', detail: 'Janice Soprano', category: 'elenco', alt: 'Retrato de la actriz Aida Turturro' },
    { src: '/assets/img/pulaski-skyway.jpg', title: 'Pulaski Skyway', detail: 'Acero, tránsito y horizonte industrial', category: 'new-jersey', layout: 'panorama', alt: 'Vista amplia del puente Pulaski Skyway en Nueva Jersey' },
    { src: '/assets/img/newark-new-jersey.jpg', title: 'Newark', detail: 'La ciudad como paisaje narrativo', category: 'new-jersey', layout: 'wide', alt: 'Vista aérea de Newark, Nueva Jersey' },
    { src: '/assets/img/classic-diner.jpg', title: 'El diner', detail: 'Un escenario cotidiano cargado de tensión', category: 'lugares', layout: 'wide', alt: 'Interior de un diner estadounidense clásico' },
];

export const episodes = [
    { code: 'T1 · E01', title: 'Los Soprano', text: 'El piloto instala la doble vida de Tony y convierte un ataque de pánico en la puerta de entrada a toda la serie.' },
    { code: 'T2 · E13', title: 'Funhouse', text: 'Un sueño febril obliga a Tony a aceptar una traición que prefería no mirar.' },
    { code: 'T3 · E11', title: 'Pine Barrens', text: 'Humor negro, frío y desorientación: Paulie y Christopher pierden el control de una tarea aparentemente simple.' },
    { code: 'T4 · E13', title: 'Whitecaps', text: 'La crisis matrimonial deja a Gandolfini y Falco frente a frente, sin la protección habitual de los códigos mafiosos.' },
    { code: 'T5 · E12', title: 'Long Term Parking', text: 'La presión del FBI sobre Adriana alcanza una resolución devastadora.' },
    { code: 'T6 · E21', title: 'Made in America', text: 'El final elimina la certeza y hace del corte a negro una decisión narrativa, no una respuesta cerrada.' },
];
