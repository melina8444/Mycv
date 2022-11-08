import React from "react";
import { Navbar } from "../../components/Navbar";
import { About } from "../About";
import { Experiences } from "../Experiences";
import { Portfolios } from "../Portfolios";
import { Skills } from "../Skills";
import { Education } from "../Education";
import { Profile } from "../Profile";




const Home = () => {

    return (
      <section>
        <Navbar />
         <div className="container">
               <div className="row">
                     <div className="col s12 m4 l3">
                        <Profile />
                     </div>
               
                  <div className="col s12 m8 l9">
                     <About/>
                     <Skills/>
                     <Experiences/>
                     <Education/>
                     <Portfolios/> 
                  </div>
               </div>
         </div>
       </section>
    );
   
   }
   
   export { Home }