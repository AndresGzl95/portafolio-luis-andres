import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

function Certificaciones() {
  const certificaciones = [
    {
        //imagen: 'src/assets/bigdata.jpg', // Ruta a la imagen del certificado
        titulo: 'Técnico en Big Data',
        descripcion:
          'Certificación oficial de Capacitate para el Empleo que demuestra conocimientos de Big Data',
          pdf: '/certificaciones/tecnicoBigData.pdf', // Ruta al archivo PDF
      },
      {
        //imagen: 'src/assets/sql1.jpg',
        titulo: 'Introduction to SQL',
        descripcion:
          'Certificación que valida el conocimiento fundamental de base de datos con SQL.',
          pdf: '/certificaciones/sql.pdf', // Ruta al archivo PDF
      },
      {
         //imagen: 'src/assets/sql2.jpg',
         titulo: 'SQL Intermediate',
         descripcion: 'Certificación que valida la experiencia en la administración y desarrollo de bases de datos.',
         pdf: '/certificaciones/sql2.pdf', // Ruta al archivo PDF
      },
      {
          //imagen: 'src/assets/sql2.jpg',
          titulo: 'Google: Inteligencia Artificial y productividad',
          descripcion: 'Certificación que valida la experiencia en el uso de la IA para mejor productividad.',
          pdf: '/certificaciones/ia.pdf', // Ruta al archivo PDF
       },
       {
          //imagen: 'src/assets/sql2.jpg',
          titulo: 'Analista de datos',
          descripcion: 'Certificación que valida la experiencia como análista de datos.',
          pdf: '/certificaciones/analista.pdf', // Ruta al archivo PDF
       },
       {
          //imagen: 'src/assets/sql2.jpg',
          titulo: 'Programador (orientado a objetos)',
          descripcion: 'Certificación que valida la experiencia y conocimientos para la programación orientada a objetos.',
          pdf: '/certificaciones/poo.pdf', // Ruta al archivo PDF
       },
       {
          //imagen: 'src/assets/sql2.jpg',
          titulo: 'Programación Orientada Al Procesamiento Digital De Imágenes',
          descripcion: 'Constancia que avala la participación como Tallerista sobre un tema en especial.',
          pdf: '/certificaciones/pdi.pdf', // Ruta al archivo PDF
       },
       {
          //imagen: 'src/assets/qrtitulo.jpg',
          titulo: 'Licenciatura En Ingeniería En Sistemas Computacionales',
          descripcion: 'Cédula profesional para ejercer profesionalmente como Ingenierio en Sistemas Computacionales.',
          pdf: '/certificaciones/isc.pdf', // Ruta al archivo PDF
       },
       {
          //imagen: 'src/assets/maestria.png',
          titulo: 'Maestro en Ingenieria',
          descripcion: 'Cédula profesional para ejercer profesionalmente como Maestro en Ingeniería.',
          pdf: '/certificaciones/MI.pdf', // Ruta al archivo PDF
       },
    // Agrega más certificaciones aquí
  ];

  return (
    <motion.section
      className="certificaciones"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="certificaciones-contenido">
        <h2>Certificaciones</h2>
        <div className="certificaciones-grid">
          {certificaciones.map((certificacion, index) => (
            <div className="certificacion-card" key={index}>
              <h3 className="certificacion-titulo">{certificacion.titulo}</h3>
              <p className="certificacion-descripcion">
                {certificacion.descripcion}
              </p>
              <a
                href={certificacion.pdf}
                download // Atributo para forzar la descarga
                className="certificacion-descargar boton boton-secundario" // Usa las clases de botón existentes
              >
                Descargar PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Certificaciones;