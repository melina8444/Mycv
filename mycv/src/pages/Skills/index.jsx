import React from "react";

const Skills = () => {

    return (
       <div>
          <div className="card">
            <div className="card-content">
                  <h6><strong>LENGUAJES DE PROGRAMACION</strong></h6>
               <div className="row mt-top">
                     <div className="col s6">
                           <p>HTML</p>
                        <div className="progress grey ligthen-1">
                           <div className="determinate blue" style={{ width: '88% '}}></div>
                        </div>
                     </div>
                     <div className="col s6">
                           <p>CSS</p>
                        <div className="progress grey ligthen-1">
                           <div className="determinate blue" style={{ width: '79% '}}></div>
                        </div>
                     </div>
                     <div className="col s6">
                           <p>JAVASCRIPT</p>
                        <div className="progress grey ligthen-1">
                           <div className="determinate blue" style={{ width: '82% '}}></div>
                        </div>
                     </div>
                     <div className="col s6">
                           <p>MYSQL</p>
                        <div className="progress grey ligthen-1">
                           <div className="determinate blue" style={{ width: '89% '}}></div>
                        </div>
                     </div>
                     <div className="col s6">
                           <p>BOOTSTRAP</p>
                        <div className="progress grey ligthen-1">
                           <div className="determinate blue" style={{ width: '81% '}}></div>
                        </div>
                     </div>
                     <div className="col s6">
                           <p>REACT</p>
                        <div className="progress grey ligthen-1">
                           <div className="determinate blue" style={{ width: '89% '}}></div>
                        </div>
                     </div>
               </div>
            </div>
          </div>
       </div>
    )
   
   }
   
   export { Skills }