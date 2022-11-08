import React from "react";
import { Link } from "react-router-dom";

const Education = () => {

    return (
       <div>
           <div className="card">
            <div className="card-content">
               <h6><strong>EDUCACION</strong></h6>
               <table className="striped">
                  <thead>
                     <tr>
                        <th>Certificado</th>
                        <th>Fecha</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Full Stack Javascript</td>
                        <td>Marzo 2022 - Dic 2022</td>
                        <td><Link to="#" className="btn blue lighten-2">VER</Link></td>

                     </tr>
                     <tr>
                        <td>Full Stack Python</td>
                        <td>Agos 2022 - Dic 2022</td>
                        <td><Link to="#" className="btn blue lighten-2">VER</Link></td>

                     </tr>
                     <tr>
                        <td>Lenguaje Java</td>
                        <td>Agos 2021 - Oct 2021</td>
                        <td><Link to="#" className="btn blue lighten-2">VER</Link></td>

                     </tr>
                     <tr>
                        <td>Testing Q.A</td>
                        <td>Oct 2021 - Dic 2022</td>
                        <td><Link to="#" className="btn blue lighten-2">VER</Link></td>

                     </tr>
                     
                  </tbody>
               </table>
            </div>
           </div>
       </div>
    )
   
   }
   
   export { Education }