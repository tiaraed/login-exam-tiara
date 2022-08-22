import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const Logout = async() => {
        try {
            await axios.delete('http://localhost/3000/logout');
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        
   
    
    <div>
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
          <div class="center">
        <h1>LOGIN SUCCESS, WELCOME</h1>
    </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={Logout} className="button is-light">
                    Log out
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </nav> 
        
  </div>
 
        </section>
  
    
    
  )
}

export default Home