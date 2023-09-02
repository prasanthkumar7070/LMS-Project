import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPaassword] = useState('')



    const emailPatern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const submiHandler = (e) => {
        e.preventDefault();
        const data = { email, password }
        axios.post('https://jsonplaceholder.typicode.com/users', data).then((response) => {
            console.log(response.data)
        })

        if (email.trim() === "") {
            setErrors((errors) => ({ ...errors, email: "Enter Email" }))
            document.getElementById("email").style.border = "1px solid red"
        }
        else if (!emailPatern.test(email)) {
            setErrors((errors) => ({ ...errors, email: "Enter Valid Email" }))
            document.getElementById("email").style.border = "1px solid red"
        }
        else {
            setErrors((errors) => ({ ...errors, email: "" }))
            document.getElementById("email").style.border = "1px solid skyblue"
        }

        if (password.trim() === "") {
            setErrors((errors) => ({ ...errors, password: "Plase enter password" }))
            document.getElementById("password").style.border = "1px solid red"
        }

        else if (password.trim().length < 8) {
            setErrors((errors) => ({ ...errors, password: "Password must be at least 8 charecters" }))
            document.getElementById("password").style.border = "1px solid red"
        }
        else {
            setErrors((errors) => ({ ...errors, password: "" }))
            document.getElementById("password").style.border = "1px solid skyblue"
        }

    }
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='col-md-7'>
                    <div className="background">
                        <img src='logo.jpg' />
                    </div>
                </div>

                <div className='col-md-5 back'>
                    <form className='form'  >
                        <h4 className='mt-5 text-white pb-5'>Login Here</h4>
                        <div className='fields'>
                            <label htmlFor='email'>E-mail</label>
                            <input type='email' id='email' name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <p className='text-danger'>{errors.email && errors.email}</p>
                        </div>

                        <div className='fields'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' name='password' placeholder='Password' value={password} onChange={(e) => setPaassword(e.target.value)} />
                            <p className='text-danger'>{errors.password && errors.password}</p>
                        </div>

                        <div className='fields mt-2'>
                            <input type='checkbox' id='check' />
                            <span className='text-white'>&nbsp;Remember me</span>
                        </div>

                        <div className='fields'>
                            <button onClick={submiHandler}>Login</button>
                        </div>
                        <li className='nav-link '><a href='#' className='text-white'>Forgot Password</a></li>

                        <div className='create mt-5 text-center'>
                            <Link to='/register' className='nav-link'>
                                <p className='text-white'>New user <b className='text-warning'>Create Account</b></p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login