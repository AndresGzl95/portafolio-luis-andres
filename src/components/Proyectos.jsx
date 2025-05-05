import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

function Proyectos() {
    const proyectos = [
        {
            titulo: 'Automatización de Sistema de Inventarios',
            descripcion:
                'Automatización e implementación de procedimientos de copias de seguridad y recuperación para el sistema de inventarios, resultando en la creación de un sistema de almacenamiento y seguimiento de datos para el CCA-UNAM.',
            tecnologias: ['SQL Server','Java','Desarrollo Movil','SQL','HTML','Android','Manejo de inventarios'],
            lugar: 'Universidad Nacional Autónoma de México (UNAM)',
        },
        {
            titulo: 'Análisis de Datos',
            descripcion:
                'Extracción de datos, análisis y posterior reporting. Automatización de consultas y procesos, instalación, mantenimiento y actualización de Microsoft SQL Server.',
            tecnologias: ['SQL Server','Base de datos','HTML','Python','Javascript','React','.NET'],
            lugar: 'SYE Software',
        },
        {
            titulo: 'Otros Proyectos',
            descripcion:
                'Desarrollo de diversos proyectos utilizando Java, Android Studio y tecnologías web.',
            tecnologias: ['Java', 'Android Studio', 'HTML', 'CSS', 'JavaScript'],
            lugar: 'Freelance',
        },
        {
            titulo: 'Diseñador Gráfico Jr',
            descripcion:
                'Experiencia diseñando nuevos elementos visuales centrándose en el concepto y el mensaje.',
            tecnologias: ['Web', 'Plantillsa','Graphic', 'HTML', 'CSS', 'JavaScript'],
            lugar: 'Ennovasoft',
        },
        {
            titulo: 'Conferencista',
            descripcion:
                'Conferencista para el 4to Congreso Internacional de Emprendimiento Sustentable y Tecnológico para el Desarrollo Social y Empresarial.',
            tecnologias: ['Web', 'SQL','HTML', 'CSS', 'JavaScript','Comunicación'],
            lugar: 'Instituto Tecnológico de Comitán',
        },
        {
            titulo: 'Investigador',
            descripcion:
                'Experiencia en la investigación de temas para el desarrollo de protocolos de investigación, tesis'+
                'y artículos científicos, contribuyendo al avance del conocimiento y la innovación en el campo del'+
                'desarrollo de software y tecnologías relacionadas.',
            tecnologias: ['Web', 'IEEE','Microsoft Office', 'Investigación', 'Equipo Multidisciplinario','Comunicación'],
            lugar: 'Universidad Nacional Autónoma de México (UNAM)',
        }
        // Agrega más proyectos aquí
    ];

    return (
        <motion.section
            className="proyectos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <div className="proyectos-contenido">
                <h2>Proyectos</h2>
                <div className="proyectos-grid">
                    {proyectos.map((proyecto, index) => (
                        <div className="proyecto-card" key={index}>
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                            <div className="proyecto-tecnologias">
                                {proyecto.tecnologias.map((tec, index) => (
                                    <span key={index} className="tecnologia-tag">
                                        {tec}
                                    </span>
                                ))}
                            </div>
                            {proyecto.lugar && (
                                <p className="proyecto-lugar">
                                    Lugar: {proyecto.lugar}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Proyectos;