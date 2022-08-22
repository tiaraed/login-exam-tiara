import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MyBackground from '../bg.png';

const Register = () => {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const[msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/users', {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword

            });
            navigate("/");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                
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
                    <form onSubmit={ Register } className="box">
                        <p className="has-text-centered" style={{color:"red"}}> {msg} </p>
                        <div className="field mt-100">
                            <label className="lable">Name</label>
                            <div className="controls">
                                <input 
                                type="text" 
                                className="input" 
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field mt-100">
                            <label className="lable">Email</label>
                            <div className="controls">
                                <input 
                                type="email" 
                                className="input" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field mt-100">
                            <label className="lable">Password</label>
                            <div className="controls">
                                <input 
                                type="password" 
                                className="input" 
                                placeholder="******" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field mt-100">
                            <label className="lable">Confirm Password</label>
                            <div className="controls">
                                <input 
                                type="password" 
                                className="input" 
                                placeholder="******" 
                                value={confirmPassword }
                                onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                        </div> 
                        <div className="field mt-100">
                            <button className="button is-dark is-fullwidth">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Register