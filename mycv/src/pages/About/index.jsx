import React from "react";

const About = () => {
  return (
    
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>SOBRE MI</strong>
          </h6>
          <p className="grey-text">
            Estudiante de la carrera Analista en sistemas, y todo lo relacionado
            a informatica con amplios conocimientos en Front-end y back-end,
            desarrollados a través de proyectos propios. Busco desarrollar mi
            carrera, ayudando a empresas que me brinden la posibilidad de
            crecer, adquirir experiencia y asi poder lograr diseños finales que
            satisfagan las necesidades y preferencias de los clientes.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>DATOS PERSONALES</strong>
          </h6>
          <div className="row mt">
            <div className="col s12 m6 l6 xl6">
              `
              <p>
                <i className="fa fa-home"></i><strong> Direccion: </strong>Bv illia 20
              </p>
              <p>
                <i className="fa fa-envelope"></i><strong> E-mail: </strong>melinayanguez@gmail.com
              </p>
              <p>
                <i className="fas fa-mobile-alt"></i><strong> Celular: </strong>351-3418116
              </p>
            </div>
            <div className="s12 m6 l6 xl6">
              `
              <p>
                <i className="fa fa-language"></i><strong> Idiomas: </strong>Ingles Basico
              </p>
              <p>
                <i className="fas fa-user-graduate"></i><strong> Estudios: </strong>Analista en sistemas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
