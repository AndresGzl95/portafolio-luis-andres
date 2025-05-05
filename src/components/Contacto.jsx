import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import emailjs from '@emailjs/browser'; // Instalar: npm install @emailjs/browser
import { useRef } from 'react'; // Importar useRef

function Contacto() {
    const formRef = useRef(); // Crear una referencia al formulario

    const sendEmail = (e) => {
        e.preventDefault(); // Prevenir el envío por defecto del formulario

        emailjs
            .sendForm(
                'service_ag0pinl', // Reemplazar con tu ID de servicio de EmailJS
                'template_xfgllwb', // Reemplazar con tu ID de plantilla de EmailJS
                formRef.current, // Usar la referencia al formulario
                'IegvEpnHYXgwBeuQz' // Opcionalmente, tu clave pública (más seguro)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('¡Mensaje enviado correctamente!'); // Mostrar mensaje de éxito
                    formRef.current.reset(); // Limpiar el formulario
                },
                (error) => {
                    console.log(error.text);
                    alert('Error al enviar el mensaje, intenta de nuevo.'); // Mostrar mensaje de error
                }
            );
    };

    return (
        <motion.section
            className="contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className="contacto-contenido">
                <h2>Contacto</h2>
                <p className="contacto-descripcion">
                    ¡Ponte en contacto conmigo! Estoy abierto a nuevas oportunidades y colaboraciones.
                </p>

                <div className="contenedor-form">
                    <form id="contact-form" ref={formRef} onSubmit={sendEmail}> {/* Agregar ref y onSubmit */}
                        <div className="fila mitad">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre Completo *"
                                className="input-mitad"
                                required // Agregar atributo required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Dirección de Email"
                                className="input-mitad"
                                required // Agregar atributo required
                            />
                        </div>
                        <div className="fila">
                            <input type="text" name="tema" placeholder="Tema..." className="input-full" />
                        </div>
                        <div className="fila">
                            <textarea
                                name="text"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Tu Mensaje..."
                                className="input-full"
                                required // Agregar atributo required
                            ></textarea>
                        </div>
                        <input type="submit" value="Enviar Mensaje" className="btn-enviar" />
                    </form>
                </div>

                <div className="contacto-info">
                    <div className="contacto-info-item">
                        <FontAwesomeIcon icon={faEnvelope} className="contacto-info-icon" />
                        <a href="mailto:andresgzl63@gmail.com">andresgzl63@gmail.com</a>
                    </div>
                    <div className="contacto-info-item">
                        <FontAwesomeIcon icon={faPhone} className="contacto-info-icon" />
                        <a href="tel: +(52) 963-140-5039">963 154 2887</a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contacto;
