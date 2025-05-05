import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

function SobreMi() {
    return (
        <motion.section
            className="sobre-mi"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className="sobre-mi-contenido">
                <h2>Sobre Mí</h2>
                <p className="sobre-mi-resumen">
                    Desarrollador de Software con sólida experiencia en el uso de SQL Server, Java,
                    inteligencia artificial, aplicativos móviles, experiencia en el desarrollo
                    de artículos de investigación y tecnologías web. Especializado en la gestión
                    eficiente de bases de datos y el diseño de aplicaciones web dinámicas y
                    funcionales. Apasionado por resolver problemas complejos y optimizar procesos
                    para mejorar el rendimiento del sistema. Con una Maestría en Ingeniería de la
                    UNAM y una Ingeniería en Sistemas Computacionales del Instituto Tecnológico de
                    Comitán, poseo una sólida base académica y experiencia práctica en el desarrollo
                    de software y análisis de datos.
                </p>

                <div className="sobre-mi-educacion">
                    <h3>Educación</h3>
                    <div className="educacion-item">
                        <h4>Maestría en Ingeniería</h4>
                        <p>Universidad Nacional Autónoma de México (UNAM) - 2020-2022</p>
                    </div>
                    <div className="educacion-item">
                        <h4>Ingeniería en Sistemas Computacionales</h4>
                        <p>Instituto Tecnológico de Comitán - 2016-2020</p>
                    </div>
                </div>

                <div className="sobre-mi-habilidades">
                    <h3>Habilidades</h3>
                    <div className="habilidades-grupo">
                        <h4>Programación y Desarrollo Web</h4>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="habilidades-grupo">
                        <h4>Bases de Datos</h4>
                        <ul>
                            <li>MySQL</li>
                            <li>Lenguaje de Manipulación de Datos (DML)</li>
                            <li>PostgreSQL</li>
                            <li>Consultas Complejas (Joins, Subconsultas, CTEs)</li>
                            <li>Optimización de Consultas</li>
                            <li>Procedimientos Almacenados y Funciones</li>
                        </ul>
                    </div>
                    <div className="habilidades-grupo">
                        <h4>Desarrollo de Aplicaciones</h4>
                        <ul>
                            <li>Android Studio</li>
                        </ul>
                    </div>
                    <div className="habilidades-grupo">
                        <h4>Inteligencia Artificial</h4>
                        <ul>
                            <li>Redes Neuronales</li>
                            <li>Machine Learning / Deep Learning</li>
                            <li>Python</li>
                            <li>Análisis de imágenes</li>
                            <li>OpenCV</li>
                            <li>TensorFlow</li>
                            <li>Keras</li>
                            <li>Matlab</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div className="habilidades-grupo">
                        <h4>Habilidades Blandas</h4>
                        <ul>
                            <li>Trabajo en Equipo</li>
                            <li>Trabajo Bajo Presión</li>
                            <li>Mantenimiento de Software</li>
                            <li>Microsoft Office</li>
                            <li>Fiable y Puntual</li>
                            <li>Aprendizaje Rápido</li>
                        </ul>
                    </div>
                </div>

                <div className="sobre-mi-idiomas">
                    <h3>Idiomas</h3>
                    <ul>
                        <li>Español - Nativo</li>
                        <li>Inglés - Avanzado</li>
                        <li>Japonés - Básico</li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}

export default SobreMi;