import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import FotoPerfil from '../assets/_Y0A5103 (2).jpg'; // Importa tu foto (¡Asegúrate de tenerla en src/assets!)

function Inicio() {
    return (
        <motion.section
            className="inicio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className="inicio-contenido">
                <div className="inicio-texto">
                    <h1>Hola, soy Luis Andrés Roblero González</h1>
                    <p className="inicio-descripcion">
                        Desarrollador de Software con sólida experiencia en el uso de SQL Server, Java,
                        inteligencia artificial, aplicativos móviles, experiencia en el desarrollo
                        de artículos de investigación y tecnologías web. Especializado en la gestión
                        eficiente de bases de datos y el diseño de aplicaciones web dinámicas y
                        funcionales. Apasionado por resolver problemas complejos y optimizar procesos
                        para mejorar el rendimiento del sistema.
                    </p>
                    <div className="inicio-botones">
                        <Link to="/proyectos" className="boton boton-primario">
                            Ver Proyectos
                        </Link>
                        <Link to="/contacto" className="boton boton-secundario">
                            Contactar
                        </Link>
                    </div>
                    <div className="inicio-redes">
                        <a
                            href="https://www.linkedin.com/in/andres-gonzalez-23821b1a7/"
                            className="red-social"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a
                            href="https://github.com/AndresGzl95" // Reemplaza con tu usuario
                            className="red-social"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
                <div className="inicio-imagen">
                    <img src={FotoPerfil} alt="Luis Andrés Roblero González" />
                </div>
            </div>
        </motion.section>
    );
}

export default Inicio;