import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import MyImage from '../user.png';
import MyBackground from '../bg.png';

const Login = () => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/login', {
                email: email,
                password: password

            });
            navigate("/home");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                console.log(error.response.data);
            }
        }
    }



  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth"
    style={{
        backgroundImage: `url(${MyBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

      }}>

    
      
      <div className="hero-body">
        
      
        <div className="container">
        
            <div className="columns is-centered">
                <div className="column is-4-dekstop">
                    <form onSubmit={Auth} className="box">
                       
                        <figure class="image is-128x128  is-fullwidth">
  <img class="is-rounded" src={MyImage} />
</figure>
                        
                    
                    <p className="has-text-centered" style={{color:"red"}}> {msg} </p>
                        <div className="field mt-100">
                            <label className="lable">Email</label>
                            <div className="controls">
                                <input 
                                type="email" 
                                className="input" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-100">
                            <label className="lable">Password</label>
                            <div className="controls">
                                <input 
                                type="password" 
                                className="input" 
                                placeholder="*******" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="level options">
                                <div className="checkbox level-left">
                                    <p class="is-size-8"><label><input type="checkbox" class="is-check-input" checked/> Remember me</label></p>
                                </div>
                                <p class="is-size-8"><Link to="/register" >Forgot Password?</Link></p>
                            </div>
                        
                        <div className="field mt-100">
                            <button className="button is-dark is-fullwidth">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login