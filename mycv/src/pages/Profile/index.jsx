import React from "react";
import ImgProfile from '../Images/foto_.png';
import { Link } from 'react-router-dom'

const Profile = () => {

    return (
       <div>
           <div className="card">

                <div className="card-image">
                    <img className="activator" src={ImgProfile} alt="Melina Yanguez" />
                    <Link className="btn-floating halfway-fab waves-effect wave-light blue lighten-2">
                    <i className="material-icons activator">more_vert</i>
                    </Link>
                </div>

                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        Melina Yanguez
                    </span>
                    <p>Full Stack Web Developer</p>
                </div>

                <div className="card-reveal section">
                        <span className="card-title light-blue-text lighten-5 text-darken-4">
                            Redes
                            <i class="material-icons right">close</i>
                        </span>
                    
                        <p className="flex-container">
                            <a href="#"><i className="fab fa-facebook-f grey-text text-darken-4 social-style" ></i></a>
                            <a href="#"><i className="fab fa-instagram grey-text text-darken-4 social-style"></i></a>
                            <a href="#"><i className="fab fa-whatsapp grey-text text-darken-4 social-style"></i></a>
                        </p>
                </div>
           </div>
       </div>
    )
   
   }
   
   export { Profile }