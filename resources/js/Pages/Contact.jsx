import { Head } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import SiteLayout from '../Layouts/SiteLayout';

const initialValues = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const nextErrors = {};

        if (values.name.trim().length < 2) nextErrors.name = 'Ingresá un nombre de al menos 2 caracteres.';
        if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Ingresá un correo electrónico válido.';
        if (values.subject.trim().length < 3) nextErrors.subject = 'Contanos brevemente el asunto.';
        if (values.message.trim().length < 15) nextErrors.message = 'El mensaje debe tener al menos 15 caracteres.';

        return nextErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
        setSubmitted(false);
    };

    const validateField = (name) => {
        const nextErrors = validate();
        setErrors((current) => ({ ...current, [name]: nextErrors[name] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            const firstInvalidField = Object.keys(nextErrors)[0];
            window.requestAnimationFrame(() => document.getElementById(firstInvalidField)?.focus());
            return;
        }

        setSubmitted(true);
        setValues(initialValues);
    };

    return (
        <SiteLayout>
            <Head title="Contacto" />
            <section className="contact-page">
                <div className="contact-page__intro">
                    <h1 data-reveal>Contacto</h1>
                    <p data-reveal>¿Encontraste una fuente para sumar o querés dejar una devolución sobre el trabajo? Escribí acá. Esta versión valida el formulario en el navegador, pero no guarda ni envía datos.</p>
                    <div className="contact-page__route" aria-hidden="true"><span>NJ</span><strong>03</strong><small>Feedback</small></div>
                </div>
                <div className="contact-form-wrap">
                    <h2>Dejá tu mensaje</h2>
                    {submitted && <p className="form-success" role="status">Listo: el mensaje pasó la validación. Como esta es una demostración, no se envió a ningún servidor.</p>}
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="field">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" name="name" value={values.name} onChange={handleChange} onBlur={() => validateField('name')} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                            {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
                        </div>
                        <div className="field">
                            <label htmlFor="email">Correo electrónico</label>
                            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} onBlur={() => validateField('email')} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                            {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
                        </div>
                        <div className="field">
                            <label htmlFor="subject">Asunto</label>
                            <input id="subject" name="subject" value={values.subject} onChange={handleChange} onBlur={() => validateField('subject')} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
                            {errors.subject && <p className="field-error" id="subject-error">{errors.subject}</p>}
                        </div>
                        <div className="field">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" value={values.message} onChange={handleChange} onBlur={() => validateField('message')} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
                            {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
                        </div>
                        <button className="submit-button" type="submit">Validar mensaje <Send size={15} /></button>
                        <p className="form-note">Esta demostración valida el mensaje en tu navegador. No se envía ni se guarda.</p>
                    </form>
                </div>
            </section>
        </SiteLayout>
    );
}
